'use client'

import React, {FC} from 'react';
import Image from 'next/image'
import {useRouter} from 'next/navigation'


const Logo  = () => {
    const router = useRouter()

    return (
        <Image
            onCLick={() => router.push('/')}
            src='/images/logo.png'
            alt='Logo'
            className='mb:black cursor-pointer'
            height='50'
            width='50'
        />
    );
};

export default Logo;