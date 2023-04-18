import {CountrySelectValue} from "@/app/components/UI/CountrySelect";


export interface CountrySelectProps {
    value?: CountrySelectValue
    onChange: (value: CountrySelectValue) => void
}