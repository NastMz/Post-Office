import React, {useEffect, useState} from "react";
import {MailList} from "../../Components/MailList/MailList";
import {store} from "../../Redux/store";
import {getActive, isActive} from "../../Utils/Emails/EmailUtils";
import {MailReader} from "../../Components/MailReader/MailReader";
import IEmail from "../../Models/Interfaces/IEmail";
import {search} from "../../Utils/Emails/search";
import {reducerNames} from "../../Utils/Reducers/reducerNames";

export const SendMails: React.FC = () => {

    const [state, updateState] = useState<Array<IEmail>>(store.getState().emailsSentReducer);
    // subscribing to the redux store
    store.subscribe(() => {
        if (store.getState().searchBarReducer === ''){
            updateState(store.getState().emailsSentReducer);
        }
        else {
            updateState(search(store.getState().emailsSentReducer, store.getState().searchBarReducer))
        }
    });

    return (
        //<Navigation />
        <div className={"mails-container"}>
            <MailList state={state} reducer={reducerNames[1]}/>
            {isActive(reducerNames[1]) ? <MailReader props={getActive(reducerNames[1])}/> : ''}
        </div>
    )
};