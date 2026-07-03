import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import { ContactData } from "@/types/relations/contact_contactData";
import { useEscape } from "@/hooks/useEscape";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    data: ContactData;
};

const socialOptions = [
    { value: 5, label: "Instagram" },
    { value: 6, label: "X" },
    { value: 7, label: "Facebook" },
    { value: 8, label: "Github" },
    { value: 9, label: "Linkedin" },
    { value: 10, label: "Youtube" },
    { value: 11, label: "Pinterest" },
    { value: 12, label: "Tiktok" },
    { value: 13, label: "Telegram" },
    { value: 14, label: "Reddit" },
    { value: 15, label: "Twitch" },
    { value: 16, label: "Medium" },
    { value: 17, label: "Blogger" },
];

interface SocialOption {
    contact_id: string | number;
    socialmedia_type?: string | number;
    label: string;
    href: string;
    iframe?: string;
}

export function ContactEdit({ open, setOpen, data }: Props) {
    const { contact_id, label, href, iframe } = data;
    const [newData, setNewData] = useState({
        contact_id: contact_id > 4 ? "social" : contact_id,
        socialmedia_type: contact_id < 4 ? "" : contact_id,
        label: label,
        href: href,
        iframe: iframe,
    });

    // Post Data
    const queryClient = useQueryClient();
    const putMutation = useMutation({
        mutationFn: (newData: SocialOption) => {
            return axios.put(`/api/iletisim/${data.id}`, newData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["panelContact"],
            });
            toast.success("İletişim bilgisi güncellendi.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const handleUpdate = async () => {
        if (!newData.contact_id || !newData.label || !newData.href) {
            toast.error("Bilgileri doldurunuz.");
            return;
        }

        await putMutation.mutateAsync(newData);

        setOpen(false);
    };

    // Escape Modal
    useEscape(open, () => setOpen(false));

    return (
        <>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center text-lg">
                    <div
                        onClick={() => setOpen(false)}
                        className="absolute inset-0 bg-black/90"
                    />

                    <div className="light relative z-10 w-full max-w-xl rounded-xl p-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <div className="text-2xl font-semibold">
                                İletişim Bilgisini Düzenle
                            </div>
                            <IoClose
                                className="text-3xl cursor-pointer hover:text-gray-700 transition-colors duration-300"
                                onClick={() => setOpen(false)}
                            />
                        </div>

                        <div className="divider flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="contact_id">
                                    İletişim Türü
                                </label>
                                <select
                                    id="contact_id"
                                    className="border rounded p-1"
                                    value={newData.contact_id}
                                    onChange={(e) =>
                                        setNewData({
                                            ...newData,
                                            contact_id: e.target.value,
                                            socialmedia_type: "",
                                        })
                                    }
                                >
                                    <option value=""></option>
                                    <option value="1">Telefon</option>
                                    <option value="2">Mail</option>
                                    <option value="3">Adres</option>
                                    <option value="4">WhatsApp</option>
                                    <option value="social">Sosyal Medya</option>
                                </select>
                            </div>

                            {newData.contact_id === "social" && (
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="socialmedia_type">
                                        Sosyal Medya Türü
                                    </label>
                                    <select
                                        id="socialmedia_type"
                                        className="border rounded p-1"
                                        value={newData.socialmedia_type}
                                        onChange={(e) =>
                                            setNewData({
                                                ...newData,
                                                socialmedia_type:
                                                    e.target.value,
                                            })
                                        }
                                    >
                                        <option value="">Seçiniz</option>
                                        {socialOptions.map((option) => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <label htmlFor="view_name">
                                    Görünecek Adlandırma
                                </label>
                                <input
                                    type="text"
                                    className="border rounded py-1 px-2"
                                    id="view_name"
                                    value={newData.label}
                                    onChange={(e) =>
                                        setNewData({
                                            ...newData,
                                            label: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="href">Bağlantı Adresi</label>
                                <input
                                    type="text"
                                    className="border rounded py-1 px-2"
                                    id="href"
                                    value={newData.href}
                                    onChange={(e) =>
                                        setNewData({
                                            ...newData,
                                            href: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            {Number(newData.contact_id) == 3 && (
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="iframe">İframe Kodu</label>
                                    <input
                                        type="text"
                                        className="border rounded py-1 px-2"
                                        id="iframe"
                                        value={newData.iframe}
                                        onChange={(e) =>
                                            setNewData({
                                                ...newData,
                                                iframe: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-900 border hover:bg-gray-200"
                            >
                                Kapat
                            </button>

                            <button
                                onClick={handleUpdate}
                                className="text-white bg-green-700 hover:bg-green-600"
                            >
                                Kaydet
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
