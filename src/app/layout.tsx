import type { Metadata } from 'next';
import { Poppins, Montserrat_Alternates } from 'next/font/google';
import './globals.css';
import './reset.css';
import NavBar from '@/components/Navbar/NavBar';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700'],
});

export const montserrat_alt = Montserrat_Alternates({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Portfolio Adriana Cuellar',
    description: 'Full Stack Developer, Backend Developer',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`${poppins.className} relative overflow-hidden bg-dark text-lightText`}
            >
                <NavBar />
                {children}
            </body>
        </html>
    );
}
