export default function İletisim() {
    return (
        <div className="flex flex-col gap-5 lg:p-10 w-full p-3">
            {/* Başlık */}
            <div className="text-2xl">İletişim</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Adres */}
                <div className="flex flex-col gap-5 p-5 border border-white rounded">
                    <div className="text-xl font-bold">Adres</div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Adres</label>
                        <input
                            type="text"
                            className="bg-gray-300 text-black p-1"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Google Maps - Yol Tarifi</label>
                        <input
                            type="text"
                            className="bg-gray-300 text-black p-1"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Google Maps - Harita Linki</label>
                        <input
                            type="text"
                            className="bg-gray-300 text-black p-1"
                        />
                    </div>
                </div>

                {/* Adres */}
                <div className="flex flex-col gap-5 p-5 border border-white rounded">
                    <div className="text-xl font-bold">Telefon</div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" id="tel_view">
                            Görünüm Adı
                        </label>
                        <input
                            type="text"
                            id="tel_view"
                            className="bg-gray-300 text-black p-1"
                            placeholder="+90 534 440 80 84"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" id="tel_call">
                            Numara
                        </label>
                        <input
                            type="text"
                            id="tel_call"
                            className="bg-gray-300 text-black p-1"
                            placeholder="+905344408084"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" id="tel_whatsapp">
                            WhatsApp
                        </label>
                        <input
                            type="text"
                            id="tel_whatsapp"
                            className="bg-gray-300 text-black p-1"
                            placeholder="905344408084"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
