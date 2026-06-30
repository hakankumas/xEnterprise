import {
    MdOutlineInsertLink,
    MdKeyboardDoubleArrowUp,
    MdKeyboardDoubleArrowDown,
    MdCall,
} from "react-icons/md";
import { TfiLayoutSlider, TfiPencilAlt } from "react-icons/tfi";

export const menuItemsPanel = [
    {
        label: "Header Menü",
        href: "/panel/menu-header",
        icon: MdKeyboardDoubleArrowUp,
    },
    {
        label: "Footer Menü",
        href: "/panel/menu-footer",
        icon: MdKeyboardDoubleArrowDown,
    },
    {
        label: "Slider",
        href: "/panel/slider",
        icon: TfiLayoutSlider,
    },
    {
        label: "Tasarım",
        href: "/panel/tasarim",
        icon: TfiPencilAlt,
    },
    {
        label: "İletişim",
        href: "/panel/iletisim",
        icon: MdCall,
    },
    {
        label: "Website",
        href: "/",
        icon: MdOutlineInsertLink,
        className: "text-green-500 animate-pulse",
        target: "_blank",
    },
];
