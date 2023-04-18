'use client'

import Container from "@/app/components/container/Container";
import {
    FaSkiing,
    GiBoatFishing,
    GiIsland,
    GiWindmill, IoDiamond,
    MdOutlineVilla,
    TbBeach,
    TbMountain,
    TbPool
} from "react-icons/all";
import CategoryBox from "@/app/components/CategoryBox";
import React from "react";
import {usePathname, useSearchParams} from "next/navigation";


export const categoriesHotels = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach!'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property hs windmills!'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property is modern!'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This property is in the countryside'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This property has a pool!'
    },
    {
        label: 'IsIlands',
        icon: GiIsland,
        description: 'This property is on an island!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This property is close to a lake!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This property has skiing activities!'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is luxuries'
    },
]
const CategoriesHotels = () => {

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
                {categoriesHotels.map((item) => (
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

export default CategoriesHotels