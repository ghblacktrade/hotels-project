import React from 'react';
import {ModalProps} from "@/app/components/modals/modal.intarface";

const Modal: React.FC<ModalProps> =
    ({
         isOpen,
         onClose,
         onSubmit,
         disabled,
         title,
         label,
         footer,
         body,
         secondaryLabel,
         secondaryAction
     }) => {
        return (
            <div>

            </div>
        );
    };

export default Modal;