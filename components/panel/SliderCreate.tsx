import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export function SliderCreate({ open, onOpenChange }: Props) {
    const [newData, setNewData] = useState({
        title: "",
        description: "",
    });

    const [file, setFile] = useState<File | null>(null);

    // Post Data
    const queryClient = useQueryClient();
    const postMutation = useMutation({
        mutationFn: (formData: FormData) => {
            return axios.post("/api/slider", formData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["panelSlider"],
            });
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handleCreate = async () => {
        const formData = new FormData();

        formData.append("title", newData.title);
        formData.append("description", newData.description);

        if (file) {
            formData.append("file", file);
        }

        await postMutation.mutateAsync(formData);

        onOpenChange(false);

        setNewData({
            title: "",
            description: "",
        });

        setFile(null);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-sm md:max-w-1/3 bg-gray-300 text-black">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Slider Ekle</DialogTitle>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                        <Label htmlFor="title">Başlık</Label>
                        <Textarea
                            id="title"
                            name="title"
                            className="h-10 declared_outline-0"
                            value={newData.title}
                            onChange={(e) =>
                                setNewData({
                                    ...newData,
                                    title: e.target.value,
                                })
                            }
                        />
                    </Field>
                    <Field>
                        <Label htmlFor="description">Açıklama</Label>
                        <Textarea
                            id="description"
                            name="description"
                            className="h-30 declared_outline-0"
                            value={newData.description}
                            onChange={(e) =>
                                setNewData({
                                    ...newData,
                                    description: e.target.value,
                                })
                            }
                        />
                    </Field>
                    <Field>
                        <Label htmlFor="description">Dosya</Label>
                        <Input
                            id="file"
                            name="file"
                            type="file"
                            accept="image/*"
                            className="cursor-pointer declared_outline-0"
                            onChange={(e) => {
                                const selectedFile = e.target.files?.[0];

                                if (selectedFile) {
                                    setFile(selectedFile);
                                }
                            }}
                        />
                    </Field>
                </FieldGroup>
                <DialogFooter className="flex flex-row justify-end">
                    <DialogClose asChild>
                        <Button className="bg-gray-400 hover:bg-gray-500 hover:text-gray-100 p-3 cursor-pointer">
                            İptal
                        </Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 p-3 cursor-pointer"
                        onClick={() => handleCreate()}
                    >
                        Kaydet
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
