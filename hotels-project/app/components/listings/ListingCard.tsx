import React from 'react';
import {Listing, Reservation} from ".prisma/client";
import {SafeUser} from "@/app/types";


interface ListingCardProps {
    data: Listing
    reservation?: Reservation
    onAction?: (id: string) => void
    disabled?: boolean
    actionLabel?: string
    actionId?: string
    currentUser?: SafeUser | null
}

const ListingCard: React.FC<ListingCardProps> = ({
                                                     data,
                                                     actionId,
                                                     actionLabel,
                                                     currentUser,
                                                     onAction,
                                                     reservation,
                                                     disabled
                                                 }) => {
    return (
        <div>

        </div>
    );
};

export default ListingCard;