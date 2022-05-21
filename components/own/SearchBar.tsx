import { InputHTMLAttributes } from "react"
import { BsSearch } from 'react-icons/bs'
interface props extends InputHTMLAttributes<HTMLInputElement> {
    filterFunction: Function
}

const SearchBar = ({ filterFunction, ...rest }: props) => {
    return (
        <div className=" rounded-lg inline-flex items-center gap-2 bg-primary-3 px-3 my-5 " {...rest}>
            <BsSearch size={20} className="text-text-2" />
            <input className="text-lg h-8 w-full border-none outline-none bg-primary-3" type="search" name="searchbar" onChange={({ currentTarget }) => filterFunction(currentTarget.value)} />
        </div>
    )
}

export default SearchBar
