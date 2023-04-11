'use client'

import React from 'react';
import {MenuItemProps} from "@/app/components/navbar/MenuItem/menuItem.interface";




const MenuItem :React.FC<MenuItemProps> = ({onClick, label}) => {
    return (
        <div onClick={onClick}
            className='px-4 py-3 hover:bg-100 transition'>
            {label}
        </div>
    );
};

export default MenuItem;