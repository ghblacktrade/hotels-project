import {create} from "zustand";
import {RentModalStore} from "@/app/hooks/rentModal.Interface";


const useFlyRentModal = create<RentModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set( {isOpen: false} )
}))

export default useFlyRentModal