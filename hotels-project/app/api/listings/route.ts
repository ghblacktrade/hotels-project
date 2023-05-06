import getCurrentUser from "@/app/actions/getCurrentUser";
import {NextResponse} from "next/server";
import prisma from "@/app/libs/prismadb";


export async function POST(
    req : Request
) {
    const [currentUser] = await Promise.all([getCurrentUser()])

    if (!currentUser) {
        return NextResponse.error()
    }

    const body = await req.json()
    const {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        animalCount,
        location,
        price
    } = body

    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            NextResponse.error()
        }
    })

    const listing = await prisma.listing.create({
        data: {
            title,
            description,
            imageSrc,
            category,
            roomCount,
            bathroomCount,
            guestCount,
            animalCount,
            locationValue: location.value,
            price: parseInt(price, 10),
            userId: currentUser.id
        }
    })
    return NextResponse.json(listing)
}
