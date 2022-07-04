import React, {useEffect, useState} from "react";
import './Navbar.css';
import {Link, useLocation} from "react-router-dom";
import {Paths} from '../../Utils/Paths';
import Logo from "../Logo/Logo";
import {store} from "../../Redux/store";

export const Navbar: React.FC = () => {

    const location = useLocation();

    let [unread, setUnread] = useState<number>(store.getState().emailsInboxReducer.filter(email => !email.read).length);
    let [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const activeItem = Paths.findIndex(item => item.pathname === location.pathname);
        setActiveIndex(activeItem);
    }, [location]);

    store.subscribe(() => {setUnread(store.getState().emailsInboxReducer.filter(email => !email.read).length)})

    return (
        <nav>
            <div className="logo">
                <Logo/>
                <span>MASSMAIL</span>
            </div>
            <div className="new-email-btn" id="new-email-btn">
                <span>Redactar</span>
                <i className={"fa fa-plus-circle"}></i>
            </div>
            <ul>
                {
                    Paths.map((route, index) => <li key={index} className={activeIndex === index ? 'selected' : ""}>
                        <Link to={route.pathname}>{route.icon} {route.name}</Link>
                        {index === 0 ? (unread > 0 ? <span>{unread}</span> : "") : ""}
                    </li>)
                }
            </ul>
        </nav>
    )
};