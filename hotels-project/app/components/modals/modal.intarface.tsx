import React from "react";


export interface ModalProps {
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title?: string
    body?: React.ReactElement
    footer?: React.ReactElement
    label: string
    disabled?: boolean
    secondaryAction?: () => void
    secondaryLabel?: string

}