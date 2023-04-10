'use client'

import React, {FC} from 'react';
import Container from "@/app/components/container/Container";
import Logo from "@/app/components/navbar/Logo";


const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
            <Container>
                <div className='flex flex-row items-center justify-between z-50 gap-3 md:gap-0'>
                    <Logo />
                </div>
            </Container>
            </div>
        </div>
    );
};

export default Navbar;