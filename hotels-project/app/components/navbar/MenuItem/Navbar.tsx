'use client'

import React, {FC} from 'react';
import Container from "@/app/components/container/Container";
import Logo from "@/app/components/navbar/Logo";
import SearchHotels from "@/app/components/navbar/SearchHotels";
import SearchTickets from "@/app/components/navbar/SearchTickets";
import UserMenu from "@/app/components/navbar/UserMenu";
import Categories from "@/app/components/navbar/Categories";
import {SafeUser} from "@/app/types";
import {NavbarProps} from "@/app/components/navbar/MenuItem/navbar.interface";





const Navbar :React.FC<NavbarProps> = ( { currentUser } ) => {

    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='
                               flex
                               flex-row
                               items-center
                               justify-between
                               z-50
                               gap-2
                               md:gap-0'>
                        <Logo/>
                        <SearchHotels/>
                        <SearchTickets/>
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>
            <Categories />
        </div>
    );
};

export default Navbar;