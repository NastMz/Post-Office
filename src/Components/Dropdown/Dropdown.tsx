import './Dropdown.css';
import React from "react";
import {store} from "../../Redux/store";
import IOption from "../../Models/Interfaces/IOption";

export const Dropdown: React.FC = () => {

    const options = [
        {
            id: 1,
            name: "Todo",
            selected: false
        },
        {
            id: 2,
            name: "Ninguno",
            selected: false
        },
        {
            id: 3,
            name: "Destacado",
            selected: false
        },
        {
            id: 4,
            name: "Sin destacar",
            selected: false
        },
    ]

    const selectOption = (option: IOption) => () => {
        option.selected = true;
        store.dispatch(
            {
                type: '@dropdown/select',
                payload: option,
            }
        );
    };

    return (
        <div className='dropdown-list'>
            <ul>
                {
                    options.map(option =>
                        <li onClick={selectOption(option)} key={option.id}>{option.name}</li>
                    )
                }
            </ul>
        </div>
    )
};