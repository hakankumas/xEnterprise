"use client";

// Core
import { useEffect, useRef, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { ReactSortable } from "react-sortablejs";
// Types
import type { Slider } from "@/types/slider";
// Icons
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle, FaEdit, FaPlusCircle } from "react-icons/fa";
// Components
import { SliderCreate } from "@/components/panel/SliderCreate";
import { SliderEdit } from "@/components/panel/SliderEdit";

export default function Slider() {
    const [createModal, setCreateModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Slider | null>(null);

    // Get Data
    const { data, isLoading, error } = useQuery({
        queryKey: ["panelSlider"],
        queryFn: async () => {
            const res = await axios.get<Slider[]>("/api/slider");
            return res.data;
        },
        staleTime: Infinity,
    });

    // Active
    const queryClient = useQueryClient();
    const activeMutation = useMutation({
        mutationFn: ({ id, active }: { id: number; active: boolean }) => {
            return axios.put(`/api/slider/active`, {
                id,
                active: !active,
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["panelSlider"],
            });
            toast.success("Slider görünürlüğü güncellendi.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    // Delete
    const deleteMutation = useMutation({
        mutationFn: (id: number) => {
            return axios.delete(`/api/slider/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["panelSlider"],
            });
            toast.success("Slider silindi.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    // Reorder
    const [slider, setSlider] = useState<Slider[]>([]);
    const latestSliderRef = useRef<Slider[]>([]);

    useEffect(() => {
        if (data) {
            setSlider(data);
        }
    }, [data]);

    const handleListChange = (newList: Slider[]) => {
        setSlider(newList);
        latestSliderRef.current = newList;
    };

    const handleEnd = async () => {
        const payload = latestSliderRef.current.map((item, index) => ({
            id: item.id,
            sort_order: index + 1,
        }));

        await axios.put("/api/slider/order", payload);
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
                <div>Slider</div>
                <button
                    className="flex flex-row items-center gap-2 border hover:bg-green-500 hover:text-black p-2 rounded cursor-pointer"
                    onClick={() => setCreateModal(true)}
                >
                    <FaPlusCircle />
                    <span className="hidden lg:block">Slider Ekle</span>
                </button>
                <SliderCreate open={createModal} setOpen={setCreateModal} />
            </div>
            <ReactSortable
                className="flex flex-col gap-2"
                animation={200}
                list={slider}
                setList={handleListChange}
                onEnd={handleEnd}
            >
                {slider.map((item) => (
                    <div
                        key={item.id}
                        className={`${
                            item.active ? "" : "opacity-40"
                        } flex flex-row justify-between items-center p-5 lg:p-3 bg-gray-900 hover:bg-gray-950 cursor-pointer rounded`}
                    >
                        <div className="line-clamp-1 w-50 lg:w-full text-xl lg:text-lg">
                            {item.title}
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
                <SliderEdit
                    key={Date.now()}
                    open={editModal}
                    setOpen={setEditModal}
                    data={selectedItem}
                />
            )}
        </div>
    );
}
