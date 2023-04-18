'use client'

import React, {useMemo, useState} from 'react';
import useFlyRentModal from "@/app/hooks/useFlyRentModal";
import Modal from "@/app/components/modals/Modal";
import Heading from "@/app/components/navbar/Heading";
import {categoriesFly} from "@/app/components/navbar/CategoriesFly";
import CategoryInput from "@/app/components/UI/CategoryInput";
import {FieldValues, useForm} from "react-hook-form";


enum STEPS {
    CATEGORY,
    LOCATION,
    IMAGES,
    PRICE,
    DESCRIPTION,
}

const RentFlyModal = () => {

    const rentFlyModal = useFlyRentModal()

    const [stepFly, setStepFly] = useState(STEPS.CATEGORY)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            category: '',
            location: null,
            passengerCount: 1,
            price: 1,
            title: '',
            description: ''
        }
    })


    const category = watch('category')
    const location = watch('location')

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
    }


    const onBack = () => {
        setStepFly((value) => value - 1)
    }

    const onNext = () => {
        setStepFly((value) => value + 1)
    }

    const actionLabel = useMemo(() => {
        if (stepFly === STEPS.PRICE) {
            return 'Create'
        }
        return  'Next'
    }, [stepFly])

    const secondaryActionLabel = useMemo(() => {
        if (stepFly === STEPS.CATEGORY) {
            return undefined
        }
        return 'Back'
    }, [stepFly])

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
                {categoriesFly.map((item) => (
                    <div key={item.label} className='col-span-1'>
                        <CategoryInput icon={item.icon}
                                       label={item.label}
                                       onClick={(category) => setCustomValue('category', category)}
                                       selected={category === item.label}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <Modal
            isOpen={rentFlyModal.isOpen}
            onClose={rentFlyModal.onClose}
            onSubmit={rentFlyModal.onClose}
            actionLabel='Submit'
            title='GO TO FLY!!!'
            body={bodyContent}
        />
    );
};

export default RentFlyModal;