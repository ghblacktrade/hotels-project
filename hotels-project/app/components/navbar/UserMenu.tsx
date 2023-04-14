'use client'

import React, {useCallback, useState} from 'react';
import {AiOutlineMenu} from "react-icons/all";
import Avatar from "@/app/components/Avatar";
import MenuItem from "@/app/components/navbar/MenuItem/MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import {UserMenuProps} from "@/app/components/navbar/userMenu.interface";
import {signOut} from "next-auth/react";

const UserMenu: React.FC<UserMenuProps> = ({currentUser}) => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])

    return (
        <div onClick={toggleOpen}
             className='
        p-4
        md:py-1
        md:px-2
        border-[1px]
        border-neutral-200
        flex
        flex-row
        items-center
        gap-3 rounded-full
        cursor-pointer
        hove:shadow-md
        transition
        '
        >
            <AiOutlineMenu/>
            <Avatar/>
            {isOpen && (
                <div className='
                absolute
                rounded-xl
                shadow-md
                w-[40vw]
                md:w-3/4
                bg-white
                overflow-hidden

                top-12
                text-sm
                '>
                    <div className='flex flex-col cursor-pointer'>
                        {currentUser ? (
                            <>
                                <MenuItem
                                    onClick={() =>{}}
                                    label='My Trips' />
                                <MenuItem
                                    onClick={() => {}}
                                    label='My Favorites' />
                                <MenuItem
                                    onClick={() => {}}
                                    label='My reservations' />
                                <MenuItem
                                    onClick={() => {}}
                                    label='My flights' />
                                <hr />
                                <MenuItem
                                    onClick={() => signOut()}
                                    label={'Logout'} />
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    label='Login'
                                    onClick={loginModal.onOpen}/>
                                <MenuItem
                                    label='Sign Up'
                                    onClick={registerModal.onOpen} />
                            </>
                        )}

                    </div>

                </div>
            )}
        </div>

    );
};

export default UserMenu;