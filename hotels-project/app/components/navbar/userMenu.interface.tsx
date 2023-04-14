import {User} from "@prisma/client";
import {SafeUser} from "@/app/types";

export interface UserMenuProps {
    currentUser?: SafeUser | null
}