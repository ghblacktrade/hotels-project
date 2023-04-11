import {Nunito} from 'next/font/google'
import './globals.css'
import React from "react";
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/client/ClientOnly";
import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "@/app/providers/ToasterProvider";

export const metadata = {
    title: 'Hotels',
    description: 'Hotels-project',
}

const font = Nunito({
    subsets: ['latin'],
})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={font.className}>
        <ClientOnly>
            <ToasterProvider />
            <RegisterModal />
            <Navbar/>
        </ClientOnly>

        {children}

        </body>

        </html>
    );
}
