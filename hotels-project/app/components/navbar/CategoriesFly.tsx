'use client'

import Container from "@/app/components/container/Container";
import {
    FaPassport,
    FaSkiing, FiUserMinus,
    GiBoatFishing,
    GiIsland,
    GiWindmill, IoDiamond, IoDiamondSharp,
    MdOutlineVilla,
    TbBeach,
    TbMountain,
    TbPool
} from "react-icons/all";
import CategoryBox from "@/app/components/CategoryBox";
import React from "react";
import {usePathname, useSearchParams} from "next/navigation";


export const categoriesFly = [
    {
        label: 'Visa',
        icon: FaPassport,
        description: 'Do you have visa?'
    },
    {
        label: 'WithoutVisa',
        icon: FiUserMinus,
        description: 'Without a visa'
    },
]
const CategoriesFly = () => {

    const params = useSearchParams()
    const category = params?.get('category')
    const pathname = usePathname()

    const isMainPage = pathname === '/'

    if(!isMainPage) {
        return null
    }

    return (
        <Container>
            <div
            className='
              pt-4
              flex
              flex-row
              items-center
              justify-between
              overflow-x-auto
            '
            >
                {categoriesFly.map((item) => (
                    <CategoryBox
                      key={item.label}
                      label={item.label}
                      selected={category === item.label}
                      icon={item.icon}
                    />
                ))}

            </div>
        </Container>
    )
}

export default CategoriesFly