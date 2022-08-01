import React from "react";
import './MailReader.css';
import IEmail from "../../Models/Interfaces/IEmail";
import {getActive} from "../../Utils/EmailsUtils/EmailUtils";
import {store} from "../../Redux/store";
import {unmarkAsActive} from "../../Redux/ReducersUtils/reducersList";

interface Props {
    props: IEmail,
    reducer: string
}

export const MailReader: React.FC<Props> = ({props, reducer}) => {

    const handleClose = () => {
        if (getActive(reducer).index === props.index) {
            store.dispatch(unmarkAsActive(props.index, reducer));
        }
    }

    return (
        <div className={`mail ${props.active ? "open-mail" : ''}`}>
            <div className={'close-icon'}>
                <i className={`fa fa-arrow-left`}
                   onClick={handleClose}></i>
            </div>
            <div className={"email-title"}>
                <span className={"email-subject"}>{props.subject}</span>
            </div>
            <div className={"email-header"}>
                <div className={"email-user-from"}>
                    <div className={"user-icon"}>
                        <i className={"fa fa-user-circle"}></i>
                    </div>
                    <div className={"user-info"}>
                        <div className={"from-email"}>
                            <span className="email-from-name">{props.name.toUpperCase()}</span>
                            <span className="email-from">{`< ${props.from} >`}</span>
                        </div>
                        <span className={"email-to"}>{`To: ${props.to}`}</span>
                    </div>
                </div>
                <div className={"email-date"}>
                    <span>{props.date}</span>
                </div>
            </div>
            <p className={"email-message"}>{props.message.length < 100 ? props.message : props.message.substring(0, 100).concat('...')}</p>
        </div>
    )
};