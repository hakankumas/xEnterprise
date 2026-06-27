export interface Slider {
    id: number;
    title?: string;
    lang_code: string;
    active: boolean;
    sort_order: number;
    description?: string;
    img_path: string;
    createdAt: Date;
    updatedAt?: Date;
}
