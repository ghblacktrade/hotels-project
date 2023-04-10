import React, {FC} from 'react';
import Image from 'next/image'
import {useRouter} from 'next/navigation'


const Logo: FC = () => {
    const router = useRouter()

    return (
        <Image
            src='/images/logo.png'
            alt='Logo'
            className='hidden mb:black cursor-pointer'
            height='100'
            width='100'
        />
    );
};

export default Logo;