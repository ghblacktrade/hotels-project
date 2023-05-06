'use client'

import React from 'react';
import {useRouter} from "next/navigation";
import Heading from "@/app/components/navbar/Heading";
import Button from "@/app/components/UI/Button";


interface EmptyState {
    title?: string
    subtitle?: string
    showReset?: boolean

}

const EmptyState: React.FC<EmptyState> = ({
                                              title = 'No exact',
                                              subtitle = 'Try changing or removing',
                                              showReset
                                          }) => {

    const router = useRouter()
    return (
        <div
            className='
        h=[60vh]
        flex
        flex-col
        gap-2
        justify-center
        items-center
        '
        >
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            <div className='w-48 mt-4'>
                {showReset && (
                    <Button
                        outline
                        label='Remove all'
                        onClick={() => router.push('/')}
                    />
                )}
            </div>
        </div>
    );
};

export default EmptyState;