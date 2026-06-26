export default function Login() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full h-full lg:w-1/3 lg:h-2/3 gap-10 rounded-md bg-gray-900">
                <p className="text-3xl font-bold text-center">
                    Yönetici Giriş Ekranı
                </p>
                <div className="flex flex-col w-75 gap-2">
                    <label htmlFor="username">Kullanıcı Adı</label>
                    <input
                        type="text"
                        id="username"
                        className="border-b border-b-white pb-2 focus:outline-none focus:ring-0"
                        autoFocus
                    />
                </div>
                <div className="flex flex-col w-75 gap-2">
                    <label htmlFor="password">Şifre</label>
                    <input
                        type="password"
                        id="password"
                        className="border-b border-b-white pb-2 focus:outline-none focus:ring-0"
                    />
                </div>
                <div className="flex flex-col w-75">
                    <button className="p-2 rounded-md bg-white text-black hover:bg-gray-200">
                        Giriş Yap
                    </button>
                </div>
            </div>
        </div>
    );
}
