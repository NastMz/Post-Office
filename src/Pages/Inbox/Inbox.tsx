import React, {useEffect, useState} from "react";
import {MailList} from "../../Components/MailList/MailList";
import {store} from "../../Redux/store";
import {reducers} from "../../Utils/Emails/ReducersNames";
import {getActive, isActive} from "../../Utils/Emails/EmailUtils";
import {MailReader} from "../../Components/MailReader/MailReader";
import IEmail from "../../Models/Interfaces/IEmail";

export const Inbox: React.FC = () => {

    const [state, updateState] = useState<Array<IEmail>>(store.getState().emailsInboxReducer);

    useEffect(() => {console.log(state)}, [state]);
    // subscribing to the redux store
    store.subscribe(() => updateState(store.getState().emailsInboxReducer))

    return (
        <div className={"mails-container"}>
            <MailList state={state} reducer={reducers[2]}/>
            {isActive(reducers[2]) ? <MailReader props={getActive(reducers[2])}/> : ''}
        </div>
    )
};