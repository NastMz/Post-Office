import React, {useRef} from "react";
import "./LogoutMenu.css";
import {store} from "../../Redux/store";
import {closeMenu} from "../../Redux/ReducersUtils/reducersList";
import {useNavigate} from "react-router-dom";


export const LogoutMenu: React.FC = () => {

    const navigate = useNavigate();

    const menuRef = useRef<any>(null);

    const toggleMenu = (e: MouseEvent) => {
        if (menuRef.current && store.getState().menuReducer && !menuRef.current.contains(e.target)) {
            store.dispatch(closeMenu());
        }
    };

    const handleClick = () => {
        sessionStorage.removeItem('e-token');
        navigate('/login');
    }

    document.addEventListener('mouseup', toggleMenu);

    return (
        <div className={"menu-container"} ref={menuRef} onClick={handleClick}>
            <span>Cerrar sesión</span>
            <i className={"fa fa-sign-out"}></i>
        </div>
    )
}