import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/variables/MenuItems";

export default function Breadcrumb() {
    const pathname = usePathname();
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
                    if (item.href === pathname) {
                        return (
                            <Link key={item.href} href={item.href}>
                                {item.label}
                            </Link>
                        );
                    }
                })}
            </div>
        </div>
    );
}
