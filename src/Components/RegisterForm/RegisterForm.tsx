import React, {useState} from "react";
import './RegisterForm.css';
import {Link, useNavigate} from "react-router-dom";
import Logo from "../Logo/Logo";
import {store} from "../../Redux/store";
import {setAlertMessage, showAlert} from "../../Redux/ReducersUtils/reducersList";
import {register} from "../../API/EmailAPI";
import {Loader} from "../Loader/Loader";

export const RegisterForm: React.FC = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleClickSubmit = () => {
        let regularExpression = /^\w+([.-]?\w+)*@massmail.site$/;
        let alerts: Array<string> = []
        if (!/\w+/.test(name)) {
            alerts.push('El nombre no puede estar vacio')
        }
        if (!/\w+/.test(email)) {
            alerts.push('El correo no puede estar vacio')
        }
        if (!/\w+/.test(password)) {
            alerts.push('La contraseña no puede estar vacia')
        }
        if (alerts.length === 0) {
            if (!regularExpression.test(email)) {
                alerts.push('¡Correo invalido!\nRecuerde: email@massmail.site')
            }
        }

        if (alerts.length > 0) {
            store.dispatch(setAlertMessage(alerts));
            store.dispatch(showAlert());
        } else {
            setLoading(true);
            register(name, email, password).then(() => {
                setLoading(false);
                navigate('/');
            });
        }
    };

    return (
        <div className={"form-container"}>
            {
                isLoading ?
                    <div className={"loader-background"}>
                        <Loader/>
                    </div>
                    : ''
            }
            <div className={"form"}>
                <div className={"mark"}>
                    {<Logo/>}
                    <span className={"massmail"}>
                        MASSMAIL
                    </span>
                </div>
                <div className={"form-title"}>
                    <span className={"title"}>¡Hola!</span>
                    <span className={"subtitle"}>Cree su cuenta</span>
                </div>
                <div className={"form-inputs"}>
                    <div className={"input"}>
                        <i className={"fa fa-user"}></i>
                        <input type={"text"} placeholder={"Nombre completo"} value={name}
                               onInput={e => setName(e.currentTarget.value)}/>
                    </div>
                    <div className={"input"}>
                        <i className={"fa fa-envelope"}></i>
                        <input type={"email"} placeholder={"Correo"} value={email}
                               onInput={e => setEmail(e.currentTarget.value)}/>
                    </div>
                    <div className={"input"}>
                        <i className={"fa fa-lock"}></i>
                        <input type={"password"} placeholder={"Contraseña"} value={password}
                               onInput={e => setPassword(e.currentTarget.value)}/>
                    </div>
                </div>
                <div className={"form-btn"}>
                    <div className={"submit-btn"} onClick={handleClickSubmit}>
                        <span className={"submit-text"}>CREAR CUENTA</span>
                    </div>
                    <div className={"link"}>
                        <Link to={"/login"}>
                            <span className={"redirect"}>¿Ya tienes una cuenta? <span
                                className={'sub'}>Inicie sesión</span></span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={"welcome-message"}>
                <span className={"title"}>¡Encantados de verte!</span>
                <p>Crea tu cuenta de correo electrónico Massmail gratis. Email inteligente, privado y seguro.</p>
            </div>
        </div>
    )
};