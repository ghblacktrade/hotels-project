'use client'

import useHotelRentModal from "@/app/hooks/useHotelRentModal";
import {categoriesHotels} from "@/app/components/navbar/CategoriesHotels";
import Modal from "@/app/components/modals/Modal";
import {useMemo, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Heading from "@/app/components/navbar/Heading";
import CategoryInput from "@/app/components/UI/CategoryInput";
import CountrySelect from "@/app/components/UI/CountrySelect";
import dynamic from "next/dynamic";
import Counter from "@/app/components/UI/Counter";
import Input from "@/app/components/UI/Input";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


enum STEPS {
    CATEGORY,
    L0CATION,
    INFO,
    PRICE
}

const RentHotelModal = () => {
    const rentHotelModal = useHotelRentModal()
    const router = useRouter()

    const [stepHotel, setStepHotel] = useState(STEPS.CATEGORY)
    const [isLoading, setIsLoading] = useState(false)

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
    const guestCount = watch('guestCount')
    const roomCount = watch('roomCount')
    const bathroomCount = watch('bathroomCount')

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
        setStepHotel((value) => value - 1)
    }

    const onNext = () => {
        setStepHotel((value) => value + 1)
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (stepHotel !== STEPS.PRICE) {
            return onNext()
        }

        setIsLoading(true)

        axios.post('/api/listings', data)
            .then(() => {
                toast.success('Listing Created!')
                router.refresh()
                reset()
                setStepHotel(STEPS.CATEGORY)
                rentHotelModal.onClose()
            })
            .catch(() => {
                toast.error('Something went wrong.')
            }).finally(() => {
                setIsLoading(false)
        })
    }

    const actionLabel = useMemo(() => {
        if (stepHotel === STEPS.PRICE) {
            return 'Create'
        }
        return 'Next'
    }, [stepHotel])

    const secondaryActionLabel = useMemo(() => {
        if (stepHotel === STEPS.CATEGORY) {
            return undefined
        }
        return 'Back'
    }, [stepHotel])

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
                {categoriesHotels.map((item) => (
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

    if (stepHotel === STEPS.L0CATION) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
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

    if (stepHotel === STEPS.INFO) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading
                title='Share some basics about your place'
                subtitle='What amenities do you have?'
                />
                <hr />
                <Counter
                title='Guests'
                subtitle='How many guests?'
                value={guestCount}
                onChange={(value) =>
                    setCustomValue('guestCount', value)}
                />
                <hr/>
                <Counter
                    title='Rooms'
                    subtitle='How many rooms do you have?'
                    value={roomCount}
                    onChange={(value) =>
                        setCustomValue('roomCount', value)
                }
                />
                <hr/>
                <Counter
                    title='bathrooms'
                    subtitle='How many rooms do you have?'
                    value={bathroomCount}
                    onChange={(value) =>
                        setCustomValue('bathroomCount', value)
                }
                />
            </div>
        )
    }

    if(stepHotel === STEPS.PRICE) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading
                title='Now, set your price'
                subtitle='How much do you charge per night?'
                />
                <Input
                id='price'
                label='Price'
                formatPrice
                type='number'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
                />
            </div>
        )
    }



    return (
        <Modal
            isOpen={rentHotelModal.isOpen}
            onClose={rentHotelModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={stepHotel === STEPS.CATEGORY ? undefined : onBack}
            title='Go!'
            body={bodyContent}
        />
    )
}


export default RentHotelModal
