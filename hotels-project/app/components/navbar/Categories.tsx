import Container from "@/app/components/container/Container";
import {GiWindmill, MdOutlineVilla, TbBeach} from "react-icons/all";
import CategoryBox from "@/app/components/CategoryBox";
import React from "react";


export const categories = [
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
    }
]
const Categories = () => {
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
                {categories.map((item) => (
                    <CategoryBox
                      key={item.label}
                      label={item.label}
                      description={item.description}
                      icon={item.icon}
                    />
                ))}

            </div>
        </Container>
    )
}

export default Categories