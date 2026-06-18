import "./globals.css";

interface PanelLayoutProps {
    children: React.ReactNode;
}

export default function PanelLayout({ children }: PanelLayoutProps) {
    return (
        <html lang="tr">
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
