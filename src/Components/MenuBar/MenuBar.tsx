import React from "react";
import './MenuBar.css';
import {OptionMenu} from "../OptionMenu/OptionMenu";
import {SearchBar} from "../SearchBar/SearchBar";

export const MenuBar: React.FC = () => {
    return (
        <div className='menu-bar'>
            <OptionMenu/>
            <SearchBar/>
        </div>
    )
};