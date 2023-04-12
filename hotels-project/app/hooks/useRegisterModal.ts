import {create} from "zustand";
import {RegisterModalStore} from "@/app/hooks/registerModal.inteface";




const useRegisterModal = create<RegisterModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}))

export default useRegisterModal;