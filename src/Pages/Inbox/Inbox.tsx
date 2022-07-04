import React, {useEffect, useState} from "react";
import {MailList} from "../../Components/MailList/MailList";
import {store} from "../../Redux/store";
import {reducers} from "../../Utils/Emails/ReducersNames";
import {getActive, isActive} from "../../Utils/Emails/EmailUtils";
import {MailReader} from "../../Components/MailReader/MailReader";
import IEmail from "../../Models/Interfaces/IEmail";
import {search} from "../../Utils/Emails/search";

export const Inbox: React.FC = () => {

    const [state, updateState] = useState<Array<IEmail>>(store.getState().emailsInboxReducer);
    // subscribing to the redux store
    store.subscribe(() => {
        if (store.getState().searchBarReducer === ''){
            updateState(store.getState().emailsInboxReducer);
        }
        else {
            updateState(search(store.getState().emailsInboxReducer, store.getState().searchBarReducer))
        }
    });

    return (
        <div className={"mails-container"}>
            <MailList state={state} reducer={reducers[2]}/>
            {isActive(reducers[2]) ? <MailReader props={getActive(reducers[2])}/> : ''}
        </div>
    )
};