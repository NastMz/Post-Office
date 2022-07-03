import React, {useEffect, useState} from "react";
import './Navbar.css';
import {Link, useLocation} from "react-router-dom";
import {Paths} from '../../Utils/Paths';
import Logo from "../Logo/Logo";

export const Navbar: React.FC = () => {

    const location = useLocation();

    let [inbox, setInbox] = useState<number>(1);
    let [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const activeItem = Paths.findIndex(item => item.pathname === location.pathname);
        setActiveIndex(activeItem);
    }, [location]);

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
                        {index === 0 ? (inbox > 0 ? <span>{inbox}</span> : "") : ""}
                    </li>)
                }
            </ul>
        </nav>
    )
};