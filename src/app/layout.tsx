'use client';
import '../../i18n'; // Подключение локализации
import './styles/globals.css';
import { Inter, Oxanium } from 'next/font/google';
import { ThemeProvider } from '@/src/components/theme-provider';
import Navbar from '../components/navbar';
import Footer from '@/src/components/footer';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });
const oxanium = Oxanium({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);



  return (
    <html lang={i18n.language} suppressHydrationWarning>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          <main className=" bg-[#050119]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
