'use client'

import React, {useMemo, useState} from 'react';
import useFlyRentModal from "@/app/hooks/useFlyRentModal";
import Modal from "@/app/components/modals/Modal";
import Heading from "@/app/components/navbar/Heading";
import {categoriesFly} from "@/app/components/navbar/CategoriesFly";
import CategoryInput from "@/app/components/UI/CategoryInput";
import {FieldValues, useForm} from "react-hook-form";
import Headless from "react-hot-toast/src/headless";
import CountrySelect from "@/app/components/UI/CountrySelect";
import Map from "@/app/components/Map";
import Counter from "@/app/components/UI/Counter";


enum STEPS {
    CATEGORY,
    LOCATION,
    INFO,
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
            adultCount: 1,
            childrenCount: 1,
            babyCount: 1,
            title: '',
            description: ''
        }
    })


    const category = watch('category')
    const location = watch('location')
    const adultCount = watch('adultCount')
    const childrenCount = watch('childrenCount')
    const babyCount = watch('babyCount')

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

    if (stepFly === STEPS.LOCATION) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading
                title='Where is you rlace located?'
                />
                <CountrySelect value={location}
                               onChange={(value) => setCustomValue('location', value)}
                />
                <Map
                center={location?.latlng}
                />
            </div>
        )
    }

    if (stepFly === STEPS.INFO) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading
                title='How many passengers?'
                />
                <hr/>
                <Counter
                    title='Adults'
                    subtitle='over 12 years old'
                    value={adultCount}
                    onChange={(value) =>
                        setCustomValue('adultCount', value)
                }
                />
                <hr/>
                <Counter
                    title='Children'
                    subtitle='from 2 to 12 years old'
                    value={childrenCount}
                    onChange={(value) =>
                        setCustomValue('childrenCount', value)
                }
                />
                <hr/>
                <Counter
                    title='Baby'
                    subtitle='up to 2 years, without a place'
                    value={babyCount}
                    onChange={(value) =>
                        setCustomValue('babyCount', value)
                }
                />
             </div>
        )
    }

    return (
        <Modal
            isOpen={rentFlyModal.isOpen}
            onClose={rentFlyModal.onClose}
            onSubmit={onNext}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={stepFly === STEPS.CATEGORY ? undefined : onBack}
            title='GO TO FLY!!!'
            body={bodyContent}
        />
    );
};

export default RentFlyModal;