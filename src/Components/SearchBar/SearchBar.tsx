import React, {useEffect, useState} from "react";
import './SearchBar.css';
import {store} from "../../Redux/store";
import {searchIn} from "../../Utils/ReducersUtils/reducersList";

export const SearchBar: React.FC = () => {

    const [searchInput, setSearchInput] = useState<string>("");

    useEffect(() => {
        store.dispatch(searchIn(searchInput));
    }, [searchInput]);

    store.subscribe(() => {
        setSearchInput(store.getState().searchBarReducer);
    });

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