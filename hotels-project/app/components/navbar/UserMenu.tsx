'use client'

import React from 'react';
import {AiOutlineMenu} from "react-icons/all";

const UserMenu = () => {
    return (
        <div onClick={() => {
        }}
             className='
        p-4
        md:py-1
        md:px-2
        border-[1px]
        border-neutral-200
        flex
        flex-row
        items-center
        gap-3 rounded-full
        cursor-pointer
        hove:shadow-md
        transition
        '
        >
            <AiOutlineMenu />
        </div>
        <User />
    );
};

export default UserMenu;