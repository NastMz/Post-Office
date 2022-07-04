import React, {useState} from "react";
import {MailList} from "../../Components/MailList/MailList";
import {MailReader} from "../../Components/MailReader/MailReader";
import '../mails.css';
import {store} from "../../Redux/store";
import {getActive, isActive} from "../../Utils/Emails/EmailUtils";
import {reducers} from "../../Utils/Emails/ReducersNames";
import IEmail from "../../Models/Interfaces/IEmail";
import {search} from "../../Utils/Emails/search";

export const ArchiveMails: React.FC = () => {

    const [state, updateState] = useState<Array<IEmail>>(store.getState().emailsArchivedReducer);
    // subscribing to the redux store
    store.subscribe(() => {
        if (store.getState().searchBarReducer === ''){
            updateState(store.getState().emailsArchivedReducer);
        }
        else {
            updateState(search(store.getState().emailsArchivedReducer, store.getState().searchBarReducer))
        }
    });

    return (
        <div className={"mails-container"}>
            <MailList state={state} reducer={reducers[0]}/>
            {isActive(reducers[0]) ? <MailReader props={getActive(reducers[0])}/> : ''}
        </div>
    )
};