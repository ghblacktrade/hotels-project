'use client'
import React, {FC} from 'react';
import Image from 'next/image'
import {AvatarProps} from "@/app/components/avatar/avatar.interface";

const Avatar :React.FC<AvatarProps> = ({src}) => {
    return (
        <Image
        className='rounded-full'
        height='30'
        width='30'
        alt='Avatar'
        src={src || '/images/avatarUser.png' }
        />
    );
};

export default Avatar;