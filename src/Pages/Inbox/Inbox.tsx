import React, {useState} from "react";
import {MailList} from "../../Components/MailList/MailList";
import {store} from "../../Redux/store";
import {getActive, isActive} from "../../Utils/EmailsUtils/EmailUtils";
import {MailReader} from "../../Components/MailReader/MailReader";
import IEmail from "../../Models/Interfaces/IEmail";
import {search} from "../../Utils/EmailsUtils/search";
import {reducerNames} from "../../Redux/ReducersUtils/reducerNames";

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
            <MailList state={state} reducer={reducerNames[0]}/>
            {isActive(reducerNames[0]) ? <MailReader props={getActive(reducerNames[0])} reducer={reducerNames[0]}/> : ''}
        </div>
    )
};