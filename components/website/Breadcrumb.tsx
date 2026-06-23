import Link from "next/link";
import { menuItems } from "@/variables/MenuItems";

interface BreadcrumbProps {
    page_name?: string;
    href_link?: string;
}

export default function Breadcrumb({ page_name, href_link }: BreadcrumbProps) {
    if (!page_name || !href_link) return null;
    return (
        <div className="container mx-auto">
            <div className="px-5 py-3">
                <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                    Ana Sayfa
                </Link>
                <span className="mx-2 text-gray-400"> / </span>
                {menuItems.map((item) => {
                    if (item.href === href_link) {
                        return (
                            <Link key={item.href} href={item.href}>
                                {page_name}
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
}
