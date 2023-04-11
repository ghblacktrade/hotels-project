'use client'
import React, {FC} from 'react';
import { BiSearch } from 'react-icons/bi'
import {AiFillHome, IoIosHome} from "react-icons/all";

const SearchHotels: FC = () => {
    return (
        <div
            className='
        border-[1px]
        w-full
        md:w-auto
        py-2
        rounded-full
        shadow-sm
        hover:shadow-md
        transition
        cursor-pointer
        '
        >
            <div className='
            flex
            flex-row
            items-center
            justify-between

            '>
                <div className='
                text-sm
                px-6
                '>
                    Anywhere
                </div>
                <div className='
                hidden
                sm:block
                text-sm
                px-6
                border-x-[1px]
                flex-1
                text-center
                '>
                    Any Week
                </div>
                <div className='
                text-sm
                pl-6
                pr-2
                text-red-600
                flex
                flex-row
                items-center
                gap-3
                '>
                    <div className='
                    hidden sm:block
                    '>
                        Who?
                    </div>
                    <div className='
                    p-2
                    border-2
                    rounded-full
                    border-black
                    text-black
                    '>
                        <BiSearch size={13}/>
                    </div>
                    <div className='
                    p-2

                    rounded-full

                    '>
                        <IoIosHome  size={20}/>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SearchHotels;