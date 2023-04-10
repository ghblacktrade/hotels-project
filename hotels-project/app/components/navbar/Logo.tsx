'use client'

import React, {FC} from 'react';
import Image from 'next/image'
import {useRouter} from 'next/navigation'


const Logo  = () => {
    const router = useRouter()

    return (
        <Image
            src='/images/logo.png'
            alt='Logo'
            className='hidden mb:black cursor-pointer'
            height='50'
            width='50'
        />
    );
};

export default Logo;