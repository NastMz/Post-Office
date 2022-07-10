import React from "react";
import './NotFound.css';
import {useNavigate} from "react-router-dom";

export const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className={"not-found"}>
            <div className={"sky"}>
                <div className={"clouds"}>
                    <div className={"cloud"} id={'cloud1'}></div>
                    <div className={"cloud"} id={'cloud2'}></div>
                    <div className={"cloud"} id={'cloud3'}></div>
                    <div className={"cloud"} id={'cloud4'}></div>
                    <div className={"cloud"} id={'cloud5'}></div>
                    <div className={"cloud"} id={'cloud6'}></div>
                    <div className={"cloud"} id={'cloud7'}></div>
                </div>
            </div>
            <div className={'container'}>
                <div className={'error'}>
                    <i className={"fa fa-laptop"}></i>
                    <span className={'error-number'}>404</span>
                    <span className={'error-title'}>ERROR</span>
                    <span className={'error-subtitle'}>Pagina No Encontrada</span>
                </div>
                <div className={'back-btn'} onClick={() => navigate(-1)}>
                    Regresar
                </div>
            </div>
        </div>
    )
}