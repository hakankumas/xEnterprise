import Link from "next/link";

export default function SeeAll(params: { slug: string }) {
    return (
        <div className="w-full h-18 flex items-center justify-center">
            <Link
                href={`/${params.slug}`}
                className="w-32 h-8 bg-gray-400 text-gray-700 flex items-center justify-center rounded hover:bg-white hover:text-black transition-colors duration-300"
            >
                Tümünü Gör
            </Link>
        </div>
    );
}
