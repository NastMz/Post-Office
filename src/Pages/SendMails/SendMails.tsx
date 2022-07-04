import React, {useEffect, useState} from "react";
import {MailList} from "../../Components/MailList/MailList";
import {store} from "../../Redux/store";
import {reducers} from "../../Utils/Emails/ReducersNames";
import {getActive, isActive} from "../../Utils/Emails/EmailUtils";
import {MailReader} from "../../Components/MailReader/MailReader";
import IEmail from "../../Models/Interfaces/IEmail";

export const SendMails: React.FC = () => {

    const [state, updateState] = useState<Array<IEmail>>(store.getState().emailsSentReducer);
    // subscribing to the redux store
    store.subscribe(() => updateState(store.getState().emailsSentReducer))

    return (
        //<Navigation />
        <div className={"mails-container"}>
            <MailList state={state} reducer={reducers[1]}/>
            {isActive(reducers[1]) ? <MailReader props={getActive(reducers[1])}/> : ''}
        </div>
    )
};