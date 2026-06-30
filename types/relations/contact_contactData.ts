import { Contact } from "../contact";

export interface ContactData extends Contact {
    id: number;
    contact_id: number;
    label: string;
    href: string;
    active: boolean;
    iframe: string;
    sort_order: number;
    parent: Contact;
}
