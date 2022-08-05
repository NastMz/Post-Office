import './Loader.css';
import React from "react";

export const Loader: React.FC = () => {

    return (
        <div className={'loader-container'}>
            <span className="loader"></span>
        </div>
    );
};