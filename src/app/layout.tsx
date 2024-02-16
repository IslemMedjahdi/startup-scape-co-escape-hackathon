import type { Metadata } from 'next';
import { Inter, Ubuntu } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/ModeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'STARTUP SCAPE',
};

const ubuntu = Ubuntu({
    variable: '--font-ubuntu',
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${ubuntu.variable} bg-[#0d0f12] text-neutral-200`}>
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <>
                        {children}
                        <div className="fixed bottom-5 right-5">
                            <ModeToggle />
                        </div>
                    </>
                </ThemeProvider>
            </body>
        </html>
    );
}
