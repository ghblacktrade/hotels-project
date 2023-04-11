'use client'


import React from 'react';
import {InputProps} from "@/app/components/UI/input.interface";
import {BiDollar} from "react-icons/all";

const Input: React.FC<InputProps> = ({
                                         id,
                                         type = 'text',
                                         required,
                                         disabled,
                                         label,
                                         errors,
                                         register,
                                         formatPrice,
                                     }) => {
    return (
        <div className='w-full relative'>
            {formatPrice && (
                <BiDollar
                    size={24}
                    className='
              text-neutral-700
              absolute
              top-5
              left-2
              '
                />
            )}
            <input
                id={id}
                disabled={disabled}
                {...register(id, {required})}
                placeholder=' '
                type={type}
                className={`
                           peer
                           w-full
                           p-4
                           pt-6
                           bg-black
                           border-2
                           rounded-md
                           outline-none
                           transition
                           disabled:opacity-50
                           disabled:cursor-not-allowed
                           ${formatPrice ? 'pl-9' : 'pl-4'}
                           ${errors[id] ? 'border-red-600' : 'border-neutral-300'}
                           ${errors[id] ? 'focus:border-red-700' : 'focus:border-black'}
                           `}
            />

        </div>
    );
};

export default Input;