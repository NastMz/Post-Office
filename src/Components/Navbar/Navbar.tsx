import React, {useEffect, useRef, useState} from "react";
import './Navbar.css';
import {Link, useLocation} from "react-router-dom";
import {Paths} from '../../Utils/RoutesUtils/Paths';
import Logo from "../Logo/Logo";
import {store} from "../../Redux/store";
import {
    closeAlert,
    closeDropdown,
    closeSidebar,
    isUncheck,
    openMailBox,
    openPage,
    resetAlertMessage,
    resetSearch,
    unmarkAsSelected
} from "../../Redux/ReducersUtils/reducersList";
import Path from "../../Models/Interfaces/IPath";
import IEmail from "../../Models/Interfaces/IEmail";
import {reducerNames} from "../../Redux/ReducersUtils/reducerNames";

export const Navbar: React.FC = () => {

    const location = useLocation();
    const barRef = useRef<any>(null);

    const [unread, setUnread] = useState<number>(store.getState().emailsInboxReducer.filter(email => !email.read).length);
    const [activeIndex, setActiveIndex] = useState<Path>(store.getState().navbarReducer);
    const [isOpen, setOpen] = useState<boolean>(store.getState().sidebarReducer);
    const [openNav, setOpenNav] = useState<boolean>(false);

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
        handleClickClose();
        store.dispatch(openPage(path));
    };

    const handleClickRedact = () => {
        if (isOpen) {
            handleClickClose();
        }
        store.dispatch(openMailBox());
    };

    useEffect(() => {
        if (location.pathname !== activeIndex.pathname) {
            store.dispatch(openPage(Paths.filter(path => path.pathname === location.pathname)[0]));
        }
    }, [activeIndex, location.pathname]);

    const handleClickClose = () => {
        setOpenNav(false);
        setTimeout(() => {
            store.dispatch(closeSidebar());
        }, 300);
    };

    const handleClickBackground = (e: MouseEvent) => {
        if (barRef.current && store.getState().sidebarReducer && !barRef.current.contains(e.target)) {
            handleClickClose();
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setOpenNav(isOpen);
        }, 50);
        if (isOpen) {
            document.addEventListener('mousedown', handleClickBackground);
        } else {
            document.removeEventListener('mousedown', handleClickBackground);
        }
    }, [isOpen]);

    store.subscribe(() => {
        setUnread(store.getState().emailsInboxReducer.filter(email => !email.read).length);
        setActiveIndex(store.getState().navbarReducer);
        setOpen(store.getState().sidebarReducer);
    })

    return (
        <div className={`nav-background ${isOpen ? 'open-nav' : ''}`}>
            <nav ref={barRef} className={`${openNav ? 'show-nav' : ''}`}>
                <div className={"close-nav show"}>
                    <i className={"fa fa-close"} onClick={() => handleClickClose()}></i>
                </div>
                <div className="logo">
                    <Logo/>
                    <span>MASSMAIL</span>
                </div>
                <div className="new-email-btn" onClick={handleClickRedact}>
                    <i className={"fa fa-feather-pointed"}></i>
                    <p className={"text"}>Redactar</p>
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
        </div>
    )
};