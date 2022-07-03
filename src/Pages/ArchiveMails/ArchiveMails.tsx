import React from "react";
import {MailList} from "../../Components/MailList/MailList";
import {MailReader} from "../../Components/MailReader/MailReader";
import '../mails.css';
import {store} from "../../Redux/store";
import {getActive, isActive} from "../../Utils/Emails/EmailUtils";
import {reducers} from "../../Utils/Emails/ReducersNames";

export const ArchiveMails: React.FC = () => {

    const [state, updateState] = React.useState(store.getState().emailsArchivedReducer);
    // subscribing to the redux store
    store.subscribe(() => updateState(store.getState().emailsArchivedReducer))

    return (
        <div className={"mails-container"}>
            <MailList state={state} reducer={reducers[0]}/>
            {isActive(reducers[0]) ? <MailReader props={getActive(reducers[0])}/> : ''}
        </div>
    )
};