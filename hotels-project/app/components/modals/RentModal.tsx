'use client'

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "@/app/components/modals/Modal";
import {useMemo, useState} from "react";
import Heading from "@/app/components/navbar/Heading";
import {categories} from "@/app/components/navbar/Categories";
import CategoryInput from "@/app/components/UI/CategoryInput";


enum STEPS {
    CATEGORY,
    L0CATION,
    INFO,
    IMAGES,
    DESCRIPTION,
    PRICE
}

const RentModal = () => {
    const rentModal = useRentModal()

    const [step, setStep] = useState(STEPS.CATEGORY)

    const {
        register,
        handleSubmit,
        setValue,
        watch
    }

    const onBack = () => {
        setStep((value) => value - 1)
    }

    const onNext = () => {
        setStep((value) => value + 1)
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Create'
        }
        return 'Next'
    }, [step])

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined
        }
        return 'Back'
    }, [step])

    let bodyContent = (
        <div className='flex flex-col gap-8'>
            <Heading
                title='Pick a category'
            />
            <div className='
                            grid
                            grid-cols-2
                            md:grid-cols-2
                            gap-3
                            max-h-[50vh]
                            overflow-y-auto
                            '>
                {categories.map((item)=> (
                    <div key={item.label} className='col-span-1'>
                        <CategoryInput
                        onClick={() => {}}
                        selected={false}
                        label={item.label}
                        icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            title='Go!'
            body={bodyContent}
        />
    )
}


export default RentModal