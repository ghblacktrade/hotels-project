'use client'
import React, {FC} from 'react';
import {CiUser} from "react-icons/all";
import {AvatarProps} from "@/app/components/avatar/avatar.interface";

const Avatar :React.FC<AvatarProps> = ({src}) => {
    return (
        <div >
            <CiUser className='rounded-full' height='30' width='30'/>
        </div>
    );
};

export default Avatar;