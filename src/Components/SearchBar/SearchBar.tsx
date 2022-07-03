import React, {useEffect, useState} from "react";
import './SearchBar.css';

export const SearchBar: React.FC = () => {

    const [searchInput, setSearchInput] = useState<string>("");

    useEffect(() => {
        console.log(searchInput);
    }, [searchInput]);

    return (
        <div className='search-bar'>
            <div className="decoration">
                <i className="fa fa-angle-left"></i>
                <i className="fa fa-angle-right"></i>
            </div>
            <input placeholder='Buscar...' value={searchInput} onInput={e => setSearchInput(e.currentTarget.value)}/>
            <i className="search-icon fa fa-search"></i>
        </div>
    )
};