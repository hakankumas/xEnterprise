"use client";

import { useState } from "react";
import { ReactSortable } from "react-sortablejs";

interface MenuItem {
    id: number;
    title: string;
}

export default function Header() {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([
        { id: 1, title: "Ana Sayfa" },
        { id: 2, title: "Hakkımızda" },
        { id: 3, title: "Hizmetler" },
        { id: 4, title: "İletişim" },
    ]);

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Menü Sıralama</h1>

            <ReactSortable
                list={menuItems}
                setList={setMenuItems}
                animation={200}
            >
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white border rounded-lg p-4 mb-2 shadow cursor-move"
                    >
                        {item.title}
                    </div>
                ))}
            </ReactSortable>

            <pre className="mt-6 bg-gray-900 text-white p-3 rounded">
                {JSON.stringify(menuItems, null, 2)}
            </pre>
        </div>
    );
}
