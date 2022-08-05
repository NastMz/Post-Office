import React from "react";
import './Login.css';
import {LoginForm} from "../../Components/LoginForm/LoginForm";
import {AlertModal} from "../../Components/AlertModal/AlertModal";

export const Login: React.FC = () => {
    return (
        <div className={"login-container"}>
            <AlertModal/>
            <LoginForm/>
        </div>
    )
}