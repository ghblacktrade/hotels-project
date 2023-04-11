import {Nunito} from 'next/font/google'


import './globals.css'
import React from "react";
import Navbar from "@/app/components/navbar/Navbar";
import ClientOnly from "@/app/components/client/ClientOnly";
import Modal from "@/app/components/modals/Modal";

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
            <Modal />
            <Navbar/>
        </ClientOnly>

        {children}

        </body>

        </html>
    );
}
