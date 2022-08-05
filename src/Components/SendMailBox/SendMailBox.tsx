import React, {useEffect, useState} from "react";
import './SendMailBox.css';
import {store} from "../../Redux/store";
import {
    add,
    closeMailBox,
    maximizeMailBox,
    minimizeMailBox,
    resetAlertMessage,
    resetMailBox,
    setAlertMessage,
    setMailbox,
    showAlert
} from "../../Redux/ReducersUtils/reducersList";
import {reducerNames} from "../../Redux/ReducersUtils/reducerNames";
import {sendEmail} from "../../API/EmailAPI";

export const SendMailBox: React.FC = () => {

    const [isOpen, setOpen] = useState<boolean>(false);
    const [isMinimized, setMinimized] = useState<boolean>(false);
    const [toEmail, setToEmail] = useState<string>('');
    const [subjectEmail, setSubjectEmail] = useState<string>('');
    const [messageEmail, setMessageEmail] = useState<string>('');

    useEffect(() => {
        store.dispatch(setMailbox({
            to: toEmail,
            subject: subjectEmail,
            message: messageEmail
        }));
    }, [toEmail, subjectEmail, messageEmail]);

    const handleClickMinimize = () => {
        store.dispatch(minimizeMailBox());
    };

    const handleClickMaximize = () => {
        store.dispatch(maximizeMailBox());
    };

    const handleClickClose = () => {
        store.dispatch(resetAlertMessage());
        store.dispatch(closeMailBox());
        setTimeout(() => store.dispatch(resetMailBox()), 500);
    };

    const checkForm = () => {
        let alert: Array<string> = [];
        if (toEmail === '') {
            alert.push('Por favor introduce un destinatario');
        }
        if (subjectEmail === '') {
            alert.push('Por favor introduce un asunto');
        }
        if (messageEmail === '') {
            alert.push('Por favor introduce un mensaje');
        }

        store.dispatch(setAlertMessage(alert));
    }

    const handleClickSend = () => {
        checkForm();
        if (store.getState().alertReducer.message.toString().length === 0) {
            let email = store.getState().sendMailBoxReducer['email'];
            store.dispatch(closeMailBox());
            store.dispatch(resetMailBox());
            sendEmail(email.to, email.subject, email.message).then(() => {
                store.dispatch(add(store.getState().sendMailBoxReducer['email'], reducerNames[1]))
            });
        } else {
            store.dispatch(showAlert());
        }
    };

    store.subscribe(() => {
        setMinimized(store.getState().sendMailBoxReducer['isMinimized']);
        setOpen(store.getState().sendMailBoxReducer['isOpen']);
        setToEmail(store.getState().sendMailBoxReducer['email']['to']);
        setMessageEmail(store.getState().sendMailBoxReducer['email']['message']);
        setSubjectEmail(store.getState().sendMailBoxReducer['email']['subject']);
    });

    return (
        <div className={`mail-box ${isOpen ? 'open' : ''}`}>
            <div className={'mail-box-header'}>
                <div className={'mail-box-title'}>
                    Mensaje nuevo
                </div>
                <div className={'mail-box-btns'}>
                    {isMinimized
                        ? <i className={'fa fa-caret-up'}
                             onClick={handleClickMaximize}></i>
                        : <i className={'fa fa-minus'}
                             onClick={handleClickMinimize}></i>}
                    <i className={'fa fa-x'} onClick={handleClickClose}></i>
                </div>
            </div>
            <div className={`mail-box-body ${isMinimized ? 'minimized' : ''}`}>
                <form className={`mail-form`}>
                    <div className={`to-box`}>
                        <input type={'email'} value={toEmail} placeholder={'Para'}
                               onChange={e => setToEmail(e.currentTarget.value)} autoFocus={isOpen}/>
                    </div>
                    <div className={`subject-box`}>
                        <input type={'text'} value={subjectEmail} placeholder={'Asunto'}
                               onChange={e => setSubjectEmail(e.currentTarget.value)}/>
                    </div>
                    <div className={`message-box`}>
                        <textarea value={messageEmail}
                                  onChange={e => setMessageEmail(e.currentTarget.value)}></textarea>
                    </div>
                    <div className={`btns-box`}>
                        <div className={'send-btn'} onClick={handleClickSend}>
                            <span>Enviar</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};