import React from "react";
import './NoEmail.css';

export const NoEmail: React.FC = () => {
    return (
        <div className={'no-email'}>
            <i className={"fa fa-envelope"}></i>
            <span>Todavía no llega nada</span>
        </div>
    )
};