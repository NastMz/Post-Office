import React from "react";
import './MailList.css';
import IEmail from "../../Models/Interfaces/IEmail";
import {MailCard} from "../MailCard/MailCard";
import {isActive} from "../../Utils/Emails/EmailUtils";

interface Props {
    state: IEmail[],
    reducer: string
}

export const MailList: React.FC<Props> = ({state, reducer}) => {

    return (
        <div className={`mail-list ${isActive(reducer) ? 'mail-open' : ''}`}>
            {
                state.map(email => <MailCard props={email} reducer={reducer} key={Math.random()}/>)
            }
        </div>
    )
};