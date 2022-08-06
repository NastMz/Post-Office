import React, {useEffect, useState} from "react";
import './Header.css';
import {useLocation} from "react-router-dom";
import {Paths} from "../../Utils/RoutesUtils/Paths";
import {store} from "../../Redux/store";
import {LogoutMenu} from "../LogoutMenu/LogoutMenu";
import {closeMenu, openMenu, openSidebar} from "../../Redux/ReducersUtils/reducersList";

export const Header: React.FC = () => {
    const location = useLocation();

    let [pageName, setPageName] = useState<string>('');
    let [isOpen, setOpen] = useState<boolean>(store.getState().menuReducer);

    let userName: string = store.getState().profileReducer.name;

    useEffect(() => {
        const activeItem = Paths.findIndex(item => item.pathname === location.pathname);
        setPageName(Paths[activeItem].name);
    }, [location]);

    const displayMenu = () => {
        if (isOpen) {
            store.dispatch(closeMenu());
        } else {
            store.dispatch(openMenu());
        }
    }

    const handleClickOpen = () => {
        store.dispatch(openSidebar());
    }

    store.subscribe(() => {
        setOpen(store.getState().menuReducer);
    });

    return (
        <header>
            <div className={'nav-btn show'} onClick={() => handleClickOpen()}>
                <i className={`fa fa-bars`}></i>
            </div>
            <div className="page-name">
                <span>{pageName}</span>
            </div>
            <div className={"user-container"} onClick={displayMenu}>
                <div className="user">
                    <i className="fa fa-user-circle"></i> <span>{userName}</span> <i
                    className={`fa fa-caret-down ${isOpen ? "is-open" : ''}`}></i>
                </div>
                {
                    isOpen ? <LogoutMenu/> : ''
                }
            </div>
        </header>
    )
};