import {User} from "@prisma/client";
import {SafeUser} from "@/app/types";

export interface NavbarProps {
    currentUser?: SafeUser | null
}
