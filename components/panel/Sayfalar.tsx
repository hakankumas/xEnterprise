"use client";

import { useEffect, useRef } from "react";
import Sortable from "sortablejs";

type Item = {
    id: number;
    title: string;
    children?: Item[];
};

const data: Item[] = [
    {
        id: 1,
        title: "Ana Menü 1",
        children: [
            { id: 2, title: "Alt Menü 1" },
            { id: 3, title: "Alt Menü 2" },
        ],
    },
    {
        id: 4,
        title: "Ana Menü 2",
        children: [
            {
                id: 5,
                title: "Alt Menü 3",
                children: [{ id: 6, title: "Alt Alt Menü 1" }],
            },
        ],
    },
];

export default function Sayfalar() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const sortableElements =
            containerRef.current.querySelectorAll(".nested-sortable");

        const sortables: Sortable[] = [];

        sortableElements.forEach((el) => {
            const sortable = new Sortable(el as HTMLElement, {
                group: "nested",
                animation: 150,
                fallbackOnBody: true,
                swapThreshold: 0.65,
                ghostClass: "opacity-50",
                handle: ".drag-handle",

                onEnd: () => {
                    console.log("Sıralama değişti");
                },
            });

            sortables.push(sortable);
        });

        return () => {
            sortables.forEach((sortable) => sortable.destroy());
        };
    }, []);

    return (
        <div ref={containerRef} className="w-full max-w-md space-y-2">
            <SortableList items={data} />
        </div>
    );
}

function SortableList({ items }: { items: Item[] }) {
    return (
        <div className="nested-sortable space-y-2 pl-4">
            {items.map((item) => (
                <div
                    key={item.id}
                    data-id={item.id}
                    className="rounded border bg-gray-900 p-3 shadow-sm"
                >
                    <div className="flex items-center gap-2">
                        <span className="drag-handle cursor-grab select-none">
                            {item.title}
                        </span>
                    </div>

                    {item.children && item.children.length > 0 && (
                        <div className="mt-2">
                            <SortableList items={item.children} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
