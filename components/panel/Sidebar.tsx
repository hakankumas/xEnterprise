import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="flex flex-col gap-5">
            <Link
                href="/"
                className="text-white hover:text-gray-400 transition-colors duration-300"
            >
                Hakan
            </Link>
        </div>
    );
}
