export interface Page {
    id: number;
    headpage_id?: number;
    title?: string;
    slug?: string;
    lang_code?: string;
    active: boolean;
    sub_title?: string;
    label?: string;
    content?: string;
    img_path?: string;
    seo_title?: string;
    seo_description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
