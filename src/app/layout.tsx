'use client';
import '../../i18n'; // Подключение локализации
import './styles/globals.css';
import { Inter, Oxanium } from 'next/font/google';
import { ThemeProvider } from '@/src/components/theme-provider';
import Navbar from '../components/navbar';
import Footer from '@/src/components/footer';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { i18n } = useTranslation();


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
