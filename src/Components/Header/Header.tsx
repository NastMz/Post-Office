import React, {useEffect, useState} from "react";
import './Header.css';
import {useLocation} from "react-router-dom";
import {Paths} from "../../Utils/RoutesUtils/Paths";
import {store} from "../../Redux/store";

export const Header: React.FC = () => {
    const location = useLocation();

    let [pageName, setPageName] = useState<string>('');

    let userName: string = store.getState().profileReducer.name;

    useEffect(() => {
        const activeItem = Paths.findIndex(item => item.pathname === location.pathname);
        setPageName(Paths[activeItem].name);
    }, [location]);

    return (
        <header>
            <div className="page-name">
                <span>{pageName}</span>
            </div>
            <div className="user">
                <i className="fa fa-user-circle"></i> <span>{userName}</span>
            </div>
        </header>
    )
};