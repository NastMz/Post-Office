import React, {useState} from "react";
import './LoginForm.css';
import {Link, useNavigate} from "react-router-dom";
import {setAlertMessage, setProfile, showAlert} from "../../Redux/ReducersUtils/reducersList";
import {store} from "../../Redux/store";
import Logo from "../Logo/Logo";
import {Loader} from "../Loader/Loader";
import {loadEmails, login, payload} from "../../API/EmailAPI";

export const LoginForm: React.FC = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(false);

    const handleClickSubmit = () => {
        let regularExpression = /^\w+([.-]?\w+)*@massmail.site$/;
        let alerts: Array<string> = []
        if (!/\w+/.test(email)) {
            alerts.push('El correo no puede estar vacio')
        }
        if (!/\w+/.test(password)) {
            alerts.push('La contraseña no puede estar vacia')
        }

        if (alerts.length === 0) {
            if (!regularExpression.test(email)) {
                alerts.push('¡Correo invalido!')
            }
        }

        if (alerts.length > 0) {
            store.dispatch(setAlertMessage(alerts));
            store.dispatch(showAlert());
        } else {
            let response = login(email, password);
            setLoading(true);
            response.then((data) => {
                if (data.hasOwnProperty('token')) {
                    sessionStorage.setItem('e-token', data.token);
                    let user = payload();
                    user.then((u) => {
                        setLoading(false);
                        store.dispatch(setProfile({name: u.name, email: u.email}));
                        loadEmails();
                        navigate('/');
                    });
                } else {
                    store.dispatch(setAlertMessage(data.message));
                    setLoading(false);
                    store.dispatch(showAlert());
                }
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
                    <span className={"subtitle"}>Inicie sesión en su cuenta</span>
                </div>
                <div className={"form-inputs"}>
                    <div className={"input"}>
                        <i className={"fa fa-envelope"}></i>
                        <input type={"email"} value={email} placeholder={"Correo"}
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
                        <span className={"submit-text"}>INICIAR SESIÓN</span>
                    </div>
                    <div className={"link"}>
                        <Link to={"/register"}>
                        <span className={"redirect"}>¿No tienes una cuenta? <span
                            className={'sub'}>Cree una</span></span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={"welcome-message"}>
                <span className={"title"}>¡Bienvenido de nuevo!</span>
                <p>Correo electrónico seguro, inteligente y fácil de usar. Mejora tu productividad con Massmail.</p>
            </div>
        </div>
    )
};