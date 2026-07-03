import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEscape } from "@/hooks/useEscape";
import toast from "react-hot-toast";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import { Slider } from "@/types/slider";

type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    data: Slider;
};

export function SliderEdit({ open, setOpen, data }: Props) {
    const { id, title, description, img_path } = data;

    const [newData, setNewData] = useState({
        id,
        title,
        description,
        img_path,
    });

    const [file, setFile] = useState<File | null>(null);

    // Post Data
    const queryClient = useQueryClient();
    const putMutation = useMutation({
        mutationFn: (formData: FormData) => {
            return axios.put(`/api/slider/${id}`, formData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["panelSlider"],
            });
            toast.success("Slider güncellendi.");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const handleUpdate = async () => {
        if (!newData.title || !newData.description) {
            toast.error("Bilgileri doldurunuz.");
            return;
        }

        const formData = new FormData();

        formData.append("title", newData.title);
        formData.append("description", newData.description);
        formData.append("img_path", newData.img_path);

        if (file) {
            formData.append("file", file);
        }

        await putMutation.mutateAsync(formData);

        setOpen(false);

        setNewData({
            id: 0,
            title: "",
            description: "",
            img_path: "",
        });
        setFile(null);
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
                                Slider Ekle
                            </div>
                            <IoClose
                                className="text-3xl cursor-pointer hover:text-gray-700 transition-colors duration-300"
                                onClick={() => setOpen(false)}
                            />
                        </div>

                        <div className="divider flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="title">Başlık</label>
                                <textarea
                                    id="title"
                                    className="border rounded py-1 px-2"
                                    value={newData.title}
                                    onChange={(e) =>
                                        setNewData({
                                            ...newData,
                                            title: e.target.value,
                                        })
                                    }
                                ></textarea>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="description">Açıklama</label>
                                <textarea
                                    id="description"
                                    className="border rounded py-1 px-2"
                                    value={newData.description}
                                    onChange={(e) =>
                                        setNewData({
                                            ...newData,
                                            description: e.target.value,
                                        })
                                    }
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="description">Resim</label>
                                    <input
                                        type="file"
                                        id="file"
                                        accept="image/*"
                                        className="border rounded py-1 px-2 cursor-pointer"
                                        onChange={(e) => {
                                            const selectedFile =
                                                e.target.files?.[0];

                                            if (selectedFile) {
                                                setFile(selectedFile);
                                            }
                                        }}
                                    />
                                </div>
                                <div className="w-full h-40">
                                    <img
                                        src={`/gallery/slider/${img_path}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
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
