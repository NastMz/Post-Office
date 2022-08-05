import React from "react";
import './Register.css';
import {RegisterForm} from "../../Components/RegisterForm/RegisterForm";
import {AlertModal} from "../../Components/AlertModal/AlertModal";

export const Register: React.FC = () => {
    return (
        <div className={"login-container"}>
            <AlertModal/>
            <RegisterForm/>
        </div>
    )
}