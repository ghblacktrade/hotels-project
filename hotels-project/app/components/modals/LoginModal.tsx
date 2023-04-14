'use client'

import useRegisterModal from "@/app/hooks/useRegisterModal";
import {useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";
import Modal from "@/app/components/modals/Modal";
import Heading from "@/app/components/navbar/Heading";
import Input from "@/app/components/UI/Input";
import toast from "react-hot-toast";
import Button from "@/app/components/UI/Button";
import {FaTelegram, FcGoogle} from "react-icons/all";
import useLoginModal from "@/app/hooks/useLoginModal";
import {signIn} from "next-auth/react";
import {callback} from "next-auth/core/routes";
import {useRouter} from "next/navigation";

const LoginModal = () => {
    const router = useRouter()
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

       signIn('credentials', {
           ...data,
           redirect: false,
       })
           .then((callback) => {
               setIsLoading(false)

               if (callback?.ok) {
                   toast.success('Logged in')
                   router.refresh()
                   loginModal.onClose()
               }

               if (callback?.error) {
                   toast.error(callback.error)
               }
           })
    }

    const bodyContent = (
        <div className='flex flex-col gap-3'>
            <Heading
                title='Wlcoe back!'
                subtitle='Login to your account!'
            />
            <Input
                id='email'
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
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

    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr/>
            <Button
                outline
                label='Continue with Google'
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button
                outline
                label='Continue with Telegram'
                icon={FaTelegram}
                onClick={() => {
                }}
            />
            <div className='
            text-neutral-500
            text-center
            mt-4
            font-light
            '>
                <div className='flex flex-row items-center gap-2'>
                    <div>
                        Already have an account?
                    </div>
                    <div onClick={registerModal.onClose}
                         className='
                    text-neutral-800
                    cursor-pointer
                    hover:underline
                    '>
                        Login In
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title='Login'
            actionLabel='Continue'
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />

    )
}

export default LoginModal