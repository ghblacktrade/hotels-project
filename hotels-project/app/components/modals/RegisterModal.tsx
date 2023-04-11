'use client'

import useRegisterModal from "@/app/hooks/useRegisterModal";
import {useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import Modal from "@/app/components/modals/Modal";
import Heading from "@/app/components/navbar/Heading";
import Input from "@/app/components/UI/Input";
import toast from "react-hot-toast";

const RegisterModal = ( ) => {

    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',

        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        axios.post('/api/register', data).then(() => {
            registerModal.onClose()
        })
            .catch((error) => {
                toast.error('Something wrong!')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const bodyContent = (
        <div className='flex flex-col gap-3'>
            <Heading
            title='Hello!'
            subtitle='Create a new account!'
            />
            <Input
            id='name'
            label='Name'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />    <Input
            id='email'
            label='Email'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />    <Input
            id='password'
            type='password'
            label='Password'
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            />
        </div>
    )

    return (
        <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title='Register'
        actionLabel='Continue'
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        />
    )
}

export default RegisterModal