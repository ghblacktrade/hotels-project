'use client'
import React from 'react';
import {CategoryInputProps} from "@/app/components/UI/categoryInput.interface";

const CategoryInput: React.FC<CategoryInputProps> = ({icon: Icon, label, selected, onClick}) => {
    return (
        <div
            className={`
                       rounded-xl
                       border-2
                       p-4
                       flex
                       flex-col
                       gap-3
                       hover:border-black
                       transition
                       cursor-pointer
                       ${selected ? 'border-black' : 'border-neutral-200'}
                       `}
        >
            <Icon size={30} />
            <div>
                {label}
            </div>

        </div>
    )
}


export default CategoryInput