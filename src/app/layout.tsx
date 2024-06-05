import type { Metadata } from 'next';
import Link from 'next/link';
import { hoverTextStyle } from '@/components/ui/tailwindStyles';
import './globals.css';

export const metadata: Metadata = {
    title: 'Taskboard',
    description: 'Project management app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className=" bg-sky-600">
                <nav className="flex justify-between mb-8 p-4 bg-sky-900 text-white">
                    <Link className={`font-bold ${hoverTextStyle}`} href="/">
                        Taskboard
                    </Link>
                    <Link
                        className={`font-medium ${hoverTextStyle}`}
                        href={process.env.PORTFOLIO_URL as string}
                    >
                        Back go Portfolio
                    </Link>
                </nav>
                {children}
            </body>
        </html>
    );
}
