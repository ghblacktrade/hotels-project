import {User} from "@prisma/client";

export type SafeUser = Omit<
User,
    'createdAT' | 'updatedAT' | 'emailVerified'
> & {
    createdAT: string
    updatedAT: string
    emailVerified: string
}