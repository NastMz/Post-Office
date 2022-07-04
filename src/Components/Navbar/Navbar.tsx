import React, {useState} from "react";
import './Navbar.css';
import {Link, useLocation} from "react-router-dom";
import {Paths} from '../../Utils/Paths';
import Logo from "../Logo/Logo";
import {store} from "../../Redux/store";

export const Navbar: React.FC = () => {

    const openPage = (index: number) => {
        return {
            type: '@navbar/openPage',
            index: index
        }
    };

    const location = useLocation();

    let [unread, setUnread] = useState<number>(store.getState().emailsInboxReducer.filter(email => !email.read).length);
    let [activeIndex, setActiveIndex] = useState<number>(store.getState().navbarReducer);

    const handleClickOption = (index: number) => () => {
        store.dispatch(openPage(index));
    };

    store.subscribe(() => {
        setUnread(store.getState().emailsInboxReducer.filter(email => !email.read).length);
        setActiveIndex(store.getState().navbarReducer);
    })

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
                    Paths.map((route) =>
                        <li key={route.index} className={activeIndex === route.index ? 'selected' : ""}
                            onClick={handleClickOption(route.index)}>
                            <Link to={route.pathname}>{route.icon} {route.name}</Link>
                            {route.index === 0 ? (unread > 0 ? <span>{unread}</span> : "") : ""}
                        </li>
                    )
                }
            </ul>
        </nav>
    )
};