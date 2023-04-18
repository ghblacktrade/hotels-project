'use client'

import useHotelRentModal from "@/app/hooks/useHotelRentModal";
import {categories} from "@/app/components/navbar/Categories";
import Modal from "@/app/components/modals/Modal";
import {useMemo, useState} from "react";
import {FieldValues, useForm} from "react-hook-form";
import Heading from "@/app/components/navbar/Heading";
import CategoryInput from "@/app/components/UI/CategoryInput";
import CountrySelect from "@/app/components/UI/CountrySelect";
import dynamic from "next/dynamic";


enum STEPS {
    CATEGORY,
    L0CATION,
    INFO,
    IMAGES,
    DESCRIPTION,
    PRICE
}

const RentHotelModal = () => {
    const rentHotelModal = useHotelRentModal()

    const [step, setStep] = useState(STEPS.CATEGORY)

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
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: '',
            price: 1,
            title: '',
            description: ''
        }
    })

    const category = watch('category')
    const location = watch('location')

    const Map = useMemo(() =>
        dynamic(() =>
            import('../Map'), {
            ssr: false
        }), [location])

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
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
                {categories.map((item) => (
                    <div key={item.label} className='col-span-1'>
                        <CategoryInput
                            onClick={(category) =>
                                setCustomValue('category', category)}
                            selected={category === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    )

    if (step === STEPS.L0CATION) {
        bodyContent = (
            <div className=' flex flex-col gap-8'>
                <Heading
                    title='Where is your place located?'
                />
                <CountrySelect
                    value={location}
                    onChange={(value) => setCustomValue('location', value)}
                />
                <Map
                    center={location?.latlng}
                />
            </div>
        )
    }

    return (
        <Modal
            isOpen={rentHotelModal.isOpen}
            onClose={rentHotelModal.onClose}
            onSubmit={onNext}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            title='Go!'
            body={bodyContent}
        />
    )
}


export default RentHotelModal
