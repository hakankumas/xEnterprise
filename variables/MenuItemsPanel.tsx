import {
    MdOutlineInsertLink,
    MdKeyboardDoubleArrowUp,
    MdKeyboardDoubleArrowDown,
    MdBackupTable,
    MdCall,
} from "react-icons/md";
import { TfiLayoutSlider, TfiPencilAlt } from "react-icons/tfi";

export const menuItemsPanel = [
    {
        label: "Website",
        href: "/",
        icon: "MdOutlineInsertLink",
    },
    {
        label: "Tasarım",
        href: "/panel/tasarim",
        icon: "TfiPencilAlt",
    },
    {
        label: "Header Menü",
        href: "/panel/menuler/header",
        icon: "MdKeyboardDoubleArrowUp",
    },
    {
        label: "Footer Menü",
        href: "/panel/menuler/footer",
        icon: "MdKeyboardDoubleArrowDown",
    },
    {
        label: "Slider",
        href: "/panel/slider",
        icon: "TfiLayoutSlider",
    },
    {
        label: "Sayfalar",
        href: "/panel/sayfalar",
        icon: "MdBackupTable",
    },
    {
        label: "İletişim",
        href: "/panel/iletisim",
        icon: "MdCall",
    },
];
