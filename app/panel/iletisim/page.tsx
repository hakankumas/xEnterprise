"use client";

// Core
import { useEffect, useId, useRef, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { ReactSortable } from "react-sortablejs";
// Types
import type { ContactData } from "@/types/relations/contact_contactData";
// Icons
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle, FaEdit, FaPlusCircle } from "react-icons/fa";
// Components
import { ContactCreate } from "@/components/panel/ContactCreate";
import { ContactEdit } from "@/components/panel/ContactEdit";
import toast from "react-hot-toast";

export default function Contact() {
    const [contactCreateModal, setContactCreateModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ContactData | null>(null);

    // Get Data
    const { data, isLoading, error } = useQuery({
        queryKey: ["panelContact"],
        queryFn: async () => {
            const res = await axios.get<ContactData[]>("/api/iletisim");
            return res.data;
        },
        staleTime: Infinity,
    });

    // Active
    const queryClient = useQueryClient();
    const activeMutation = useMutation({
        mutationFn: ({ id, active }: { id: number; active: boolean }) => {
            return axios.put(`/api/iletisim/${id}`, {
                active: !active,
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["panelContact"],
            });
            toast.success("İletişim bilgisi görünürlüğü güncellendi.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    // Delete
    const deleteMutation = useMutation({
        mutationFn: (id: number) => {
            return axios.delete(`/api/iletisim/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["panelContact"],
            });
            toast.success("İletişim bilgisi silindi.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    // Reorder
    const [contact, setContact] = useState<ContactData[]>([]);
    const latestContactRef = useRef<ContactData[]>([]);

    useEffect(() => {
        if (data) {
            setContact(data);
        }
    }, [data]);

    const handleListChange = (newList: ContactData[]) => {
        setContact(newList);
        latestContactRef.current = newList;
    };

    const handleEnd = async () => {
        const payload = latestContactRef.current.map((item, index) => ({
            id: item.id,
            sort_order: index + 1,
        }));

        await axios.put("/api/iletisim/order", payload);
    };

    // Active
    const toggleActive = (id: number, active: boolean) => {
        activeMutation.mutate({ id, active });
    };

    // Delete
    const handleDelete = (id: number) => {
        deleteMutation.mutate(id);
    };

    if (isLoading) return <div>Yükleniyor...</div>;
    if (error) return <div>Hata oluştu!</div>;
    if (!data) return null;

    return (
        <div className="flex flex-col gap-2 lg:p-10 w-full p-3">
            <div className="flex flex-row justify-between items-center text-2xl">
                <div>İletişim</div>
                <button
                    className="flex flex-row items-center gap-2 border hover:bg-green-500 hover:text-black p-2 rounded cursor-pointer"
                    onClick={() => setContactCreateModal(true)}
                >
                    <FaPlusCircle />
                    <span className="hidden lg:block">
                        İletişim Bilgisi Ekle
                    </span>
                </button>
                <ContactCreate
                    open={contactCreateModal}
                    setOpen={setContactCreateModal}
                />
            </div>
            <ReactSortable
                className="flex flex-col gap-2"
                animation={200}
                list={contact}
                setList={handleListChange}
                onEnd={handleEnd}
            >
                {contact.map((item) => (
                    <div
                        key={item.id}
                        className={`${
                            !item.active && "opacity-40"
                        } flex flex-row justify-between items-center p-5 lg:p-3 bg-gray-900 hover:bg-gray-950 cursor-pointer rounded`}
                    >
                        <div className="line-clamp-1 w-50 lg:w-full text-xl lg:text-lg">
                            {`${item.parent.name}: ${item.label}`}
                        </div>
                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 text-2xl w-fit ps-5">
                            <FaCheckCircle
                                title={item.active ? "Pasife Al" : "Aktif Et"}
                                className="text-green-500 hover:text-green-700 cursor-pointer"
                                onClick={() =>
                                    toggleActive(item.id, item.active)
                                }
                            />
                            <FaEdit
                                title="Düzenle"
                                className="text-white hover:text-gray-400 cursor-pointer"
                                onClick={() => {
                                    setSelectedItem(item);
                                    setEditModal(true);
                                }}
                            />
                            <MdDeleteForever
                                title={item.active ? "Pasife Al" : "Sil"}
                                className="text-red-500 hover:text-red-700 cursor-pointer"
                                onClick={() =>
                                    item.active
                                        ? toggleActive(item.id, item.active)
                                        : handleDelete(item.id)
                                }
                            />
                        </div>
                    </div>
                ))}
            </ReactSortable>
            {selectedItem && (
                <ContactEdit
                    key={Date.now()}
                    open={editModal}
                    setOpen={setEditModal}
                    data={selectedItem}
                />
            )}
        </div>
    );
}
