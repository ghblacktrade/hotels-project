'use client'

import React from 'react';
import {ButtonProps} from "@/app/components/UI/button.interface";

const Button: React.FC<ButtonProps> = ({label, onClick, icon: Icon, disabled, outline, small}) => {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                       relative
                       disabled:opacity-70
                       disabled:cursor-not-allowed
                       rounded-lg
                       hover:opacity-80
                       transition
                       w-full
                       ${outline ? 'bg-white' : 'bg-black'}
                       ${outline ? 'border-black' : 'border-red-600'}
                       ${outline ? 'text-black' : 'text-white'}
                       ${small ? 'py-1' : 'py-3'}
                       ${small ? 'text-sm' : 'text-md'}
                       ${small ? 'font-light' : 'font-bold'}
                       ${small ? 'border-[1px]' : 'border-2'}
        `}>
            {Icon && (
                <Icon size={24}
                      className='
                absolute
                left-4
                top-3
                '
                />
            )}
            {label}
        </button>
    );
};

export default Button;