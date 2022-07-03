import React, {useState} from "react";
import './OptionMenu.css';
import {Dropdown} from "../Dropdown/Dropdown";
import {store} from "../../Redux/store";
import IOption from "../../Models/Interfaces/IOption";

export const OptionMenu: React.FC = () => {

    const options = [
        {
            id: 1,
            name: "Destacar",
            selected: false
        },
        {
            id: 2,
            name: "Leer",
            selected: false
        },
        {
            id: 3,
            name: "Eliminar",
            selected: false
        },
    ]

    const [isOpen, setOpen] = useState<boolean>(false);

    const checkEmails = (index: number = 1) => () => {
        console.log(index);
    };

    const displayDropdown = () => {
        if (store.getState().dropdownReducer.selected) {
            checkEmails(store.getState().dropdownReducer.id);
            store.dispatch(
                {
                    type: '@dropdown/reset',
                    payload: null
                }
            );
        }
        setOpen(!isOpen);
    }

    const selectOption = (option: IOption) => () => {
        option.selected = true;
        store.dispatch(
            {
                type: '@btn/select',
                payload: option,
            }
        );
    };

    return (
        <div className="options">
            <div className={`option-menu ${isOpen ? "open" : ""}`}>
                <div className="dropdown-header">
                    <input type='checkbox' onChange={checkEmails(1)}/>
                    <i className="fa fa-caret-down" onClick={displayDropdown}></i>
                </div>
                <div className="dropdown-list-container">
                    {isOpen ? <Dropdown/> : ""}
                </div>
            </div>
            <div className="option-btns">
                <div className={`option-btn ${store.getState().btnReducer.id === 1 ? 'clicked' : ''}`}
                     onClick={selectOption(options[0])}>
                    <i className="fa fa-star"></i>
                </div>
                <div className={`option-btn ${store.getState().btnReducer.id === 2 ? 'clicked' : ''}`}
                     onClick={selectOption(options[1])}>
                    <i className="fa fa-envelope-open"></i>
                </div>
                <div className={`option-btn ${store.getState().btnReducer.id === 3 ? 'clicked' : ''}`}
                     onClick={selectOption(options[2])}>
                    <i className="fa fa-trash"></i>
                </div>
            </div>
        </div>
    )
};