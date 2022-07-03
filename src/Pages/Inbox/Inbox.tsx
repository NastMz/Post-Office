import React from "react";
import {MailList} from "../../Components/MailList/MailList";
import {store} from "../../Redux/store";
import {reducers} from "../../Utils/Emails/ReducersNames";
import {getActive, isActive} from "../../Utils/Emails/EmailUtils";
import {MailReader} from "../../Components/MailReader/MailReader";

export const Inbox: React.FC = () => {

    const [state, updateState] = React.useState(store.getState().emailsInboxReducer);
    // subscribing to the redux store
    store.subscribe(() => updateState(store.getState().emailsInboxReducer))

    return (
        <div className={"mails-container"}>
            <MailList state={state} reducer={reducers[2]}/>
            {isActive(reducers[2]) ? <MailReader props={getActive(reducers[2])}/> : ''}
        </div>
    )
};