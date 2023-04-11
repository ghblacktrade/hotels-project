'use client'
import React, {FC} from 'react';
import {CiUser} from "react-icons/all";

const Avatar :FC = () => {
    return (
        <div >
            <CiUser className='rounded-full' height='30' width='30'/>
        </div>
    );
};

export default Avatar;