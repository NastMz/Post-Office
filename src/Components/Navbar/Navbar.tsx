import React, {useEffect, useState} from "react";
import './Navbar.css';
import {Link, useLocation} from "react-router-dom";
import {Paths} from '../../Utils/Routes/Paths';
import Logo from "../Logo/Logo";
import {store} from "../../Redux/store";
import {closeDropdown, isUncheck, openPage, resetSearch, unmarkAsSelected} from "../../Utils/Reducers/reducersList";
import Path from "../../Models/Interfaces/IPath";
import IEmail from "../../Models/Interfaces/IEmail";
import {reducerNames} from "../../Utils/Reducers/reducerNames";

export const Navbar: React.FC = () => {

    const location = useLocation();

    const [unread, setUnread] = useState<number>(store.getState().emailsInboxReducer.filter(email => !email.read).length);
    const [activeIndex, setActiveIndex] = useState<Path>(store.getState().navbarReducer);

    const handleClickOption = (path: Path) => () => {
        if (store.getState().dropdownReducer) {
            store.dispatch(closeDropdown());
        }

        if (store.getState().checkedReducer) {
            store.dispatch(isUncheck());
        }

        if (store.getState().searchBarReducer !== '') {
            store.dispatch(resetSearch());
        }

        switch (store.getState().navbarReducer.index) {
            case 0:
                store.getState().emailsInboxReducer.forEach((email: IEmail) => {
                    store.dispatch(unmarkAsSelected(email.index, reducerNames[0]));
                });
                break;
            case 1:
                store.getState().emailsSentReducer.forEach((email: IEmail) => {
                    store.dispatch(unmarkAsSelected(email.index, reducerNames[1]));
                });
                break;
            case 2:
                store.getState().emailsArchivedReducer.forEach((email: IEmail) => {
                    store.dispatch(unmarkAsSelected(email.index, reducerNames[2]));
                });
                break;
        }
        store.dispatch(openPage(path));
    };

    useEffect(() => {
        if (location.pathname !== activeIndex.pathname) {
            store.dispatch(openPage(Paths.filter(path => path.pathname === location.pathname)[0]));
        }
    }, [activeIndex]);

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
                        <li key={route.index} className={activeIndex.index === route.index ? 'selected' : ""}>
                            <Link to={route.pathname}
                                  onClick={handleClickOption({index: route.index, pathname: route.pathname})}>
                                <div>
                                    {route.icon}
                                    {route.name}
                                </div>
                                <div>
                                    {route.index === 0 ? (unread > 0 ? <span>{unread}</span> : "") : ""}
                                </div>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
};