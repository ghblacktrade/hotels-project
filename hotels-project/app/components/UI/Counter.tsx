'use client'

import React, {useCallback} from 'react';
import {CounterProps} from "@/app/components/UI/counter.inteface";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/all";

const Counter: React.FC<CounterProps> = ({title, subtitle, value, onChange,}) => {

    const onAdd = useCallback(() => {
        onChange(value + 1)
    }, [onChange, value])

    const onReduce = useCallback(() => {
        if (value === 1) {
            return
        }
        onChange(value - 1)
    }, [value, onChange])

    return (
        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col'>
                <div>
                    {title}
                </div>
                <div className='font-light'>
                    {subtitle}
                </div>
            </div>
            <div className='flex flex-row items-center gap-4'>
                <div
                    onClick={onReduce}
                    className='
                             w-10
                             h-10
                             rounded-full
                             border-[1px]
                             border-neutral-400
                             flex
                             items-center
                             justify-center
                             cursor-pointer
                             hover:opacity-80
                             transition
                             '>
                    <AiOutlineMinus/>
                </div>
                <div>
                    {value}
                </div>
                <div
                    onClick={onAdd}
                    className='
                              w-10
                              h-10
                              rounded-full
                              border-[1px]
                              border-neutral-400
                              flex
                              items-center
                              justify-center
                              cursor-pointer
                              hover:opacity-80
                              transition
                              '
                >
                    <AiOutlinePlus/>
                </div>
            </div>
        </div>
    );
};

export default Counter;