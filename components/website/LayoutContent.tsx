import TanstackProvider from "./TanstackProvider";
import Header from "./Header";
import Footer from "./Footer";
import ContactBtn from "./ContactBtn";

interface LayoutContentProps {
    children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
    return (
        <TanstackProvider>
            <Header />
            <div className="min-h-screen">{children}</div>
            <Footer />
            <ContactBtn />
        </TanstackProvider>
    );
}
