'use client'

import React from 'react';
import useFlyRentModal from "@/app/hooks/useFlyRentModal";
import Modal from "@/app/components/modals/Modal";

const RentFlyModal = () => {

    const rentFlyModal = useFlyRentModal()

    return (
        <Modal
            isOpen={rentFlyModal.isOpen}
            onClose={rentFlyModal.onClose}
            onSubmit={rentFlyModal.onClose}
            actionLabel='Submit'
            title='GO TO FLY!!!'
        />
    );
};

export default RentFlyModal;