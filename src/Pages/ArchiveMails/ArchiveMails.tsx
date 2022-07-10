import React, {useState} from "react";
import {MailList} from "../../Components/MailList/MailList";
import {MailReader} from "../../Components/MailReader/MailReader";
import '../MailsContainer.css';
import {store} from "../../Redux/store";
import {getActive, isActive} from "../../Utils/EmailsUtils/EmailUtils";
import IEmail from "../../Models/Interfaces/IEmail";
import {search} from "../../Utils/EmailsUtils/search";
import {reducerNames} from "../../Utils/ReducersUtils/reducerNames";

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
            <MailList state={state} reducer={reducerNames[2]}/>
            {isActive(reducerNames[2]) ? <MailReader props={getActive(reducerNames[2])}  reducer={reducerNames[2]}/> : ''}
        </div>
    )
};