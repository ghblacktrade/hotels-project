'use client'

import React, {useCallback} from 'react';
import {UserMenuProps} from "@/app/components/navbar/userMenu.interface";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useFlyRentModal from "@/app/hooks/useFlyRentModal";

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const rentFlyModal = useFlyRentModal()


    const onFlyRent = useCallback(() => {
        rentFlyModal.onOpen()
    }, [currentUser, loginModal, rentFlyModal])

    return (

        <div className='flex flex-row items-center gap-2'>
            <div
                onClick={onFlyRent}
                className='
                  hidden
                  md:block
                  py-1
                  px-4
                  rounded-full
                  hover:bg-neutral-100
                  transition
                  cursor-pointer
                  '
            >
                Go Fly!
            </div>

        </div>

    );
};

export default UserMenu;