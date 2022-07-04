import React from "react";
import './MailCard.css';
import IEmail from "../../Models/Interfaces/IEmail";
import {store} from "../../Redux/store";
import {getActive} from "../../Utils/Emails/EmailUtils";
import {reducers} from "../../Utils/Emails/ReducersNames";

interface Props {
    props: IEmail;
    reducer: string
}

export const MailCard: React.FC<Props> = ({props, reducer}) => {

    const markAsRead = (index: number) => {
        return {
            type: `@email${reducer}/markAsRead`,
            index: index
        }
    };

    const markAsActive = (index: number) => {
        return {
            type: `@email${reducer}/markAsActive`,
            index: index
        }
    };
    const unmarkAsActive = (index: number) => {
        return {
            type: `@email${reducer}/unmarkAsActive`,
            index: index
        }
    };

    const markAsImportant = (index: number) => {
        return {
            type: `@email${reducer}/markAsImportant`,
            index: index
        }
    };
    const unmarkAsImportant = (index: number) => {
        return {
            type: `@email${reducer}/unmarkAsImportant`,
            index: index
        }
    };

    const markAsArchive = (index: number) => {
        return {
            type: `@email${reducer}/markAsArchive`,
            index: index
        }
    };
    const unmarkAsArchive = (index: number) => {
        return {
            type: `@emailArchived/unmarkAsArchive`,
            index: index
        }
    };

    const create = (email: IEmail, on: string) => {
        return {
            type: `@email${on}/create`,
            payload: email
        }
    };
    const remove = (index: number) => {
        return {
            type: `@email${reducer}/remove`,
            index: index
        }
    };

    const handleClickCard = (index: number) => () => {
        if (getActive(reducer).index === index) {
            store.dispatch(unmarkAsActive(index));
        } else {
            store.dispatch(unmarkAsActive(getActive(reducer).index));
            store.dispatch(markAsActive(index));
            store.dispatch(markAsRead(index));
        }
    };

    const handleClickImportant = (index: number) => () => {
        switch (reducer) {
            case reducers[0]:
                store.getState().emailsArchivedReducer.forEach(email => {
                    if (email.index === index) {
                        email.important ? store.dispatch(unmarkAsImportant(index)) : store.dispatch(markAsImportant(index));
                    }
                });
                break;
            case reducers[1]:
                store.getState().emailsSentReducer.forEach(email => {
                    if (email.index === index) {
                        email.important ? store.dispatch(unmarkAsImportant(index)) : store.dispatch(markAsImportant(index));
                    }
                });
                break;
            case reducers[2]:
                store.getState().emailsInboxReducer.forEach(email => {
                    if (email.index === index) {
                        email.important ? store.dispatch(unmarkAsImportant(index)) : store.dispatch(markAsImportant(index));
                    }
                });
                break;
        }
    };

    const handleClickArchive = (index: number) => () => {
        switch (reducer) {
            case reducers[0]:
                store.getState().emailsArchivedReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(unmarkAsArchive(index));
                        if (email.active) {
                            store.dispatch(unmarkAsActive(index));
                        }
                    }
                });
                store.getState().emailsArchivedReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(create(email, (email.context === 'send' ? reducers[1] : reducers[2])));
                        store.dispatch(remove(index));
                    }
                });
                break;
            case reducers[1]:
                store.getState().emailsSentReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(markAsArchive(index));
                        if (email.active) {
                            store.dispatch(unmarkAsActive(index));
                        }
                    }
                });
                store.getState().emailsSentReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(create(email, 'Archived'));
                        store.dispatch(remove(index));
                    }
                });
                break;
            case reducers[2]:
                store.getState().emailsInboxReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(markAsArchive(index));
                        if (email.active) {
                            store.dispatch(unmarkAsActive(index));
                        }
                    }
                });
                store.getState().emailsInboxReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(create(email, 'Archived'));
                        store.dispatch(remove(index));
                    }
                });
                break;
        }
    };

    const handleClickDelete = (index: number) => () => {
        store.dispatch(remove(index));
    }

    return (
        <div className={`mail-card ${props.read ? "read" : ''} ${props.active ? "active" : ''}`}>
            <div className={"email-header"}>
                <div className={"user-from"}>
                    <i className={"fa fa-user-circle"}></i>
                    <span className="from">{props.name}</span>
                </div>
                <i className={`fa fa-arrow-right see`} onClick={handleClickCard(props.index)}></i>
            </div>
            <span className={"subject"}>{props.subject}</span>
            <p className={"message"}>{props.message.length < 100 ? props.message : props.message.substring(0, 100).concat('...')}</p>
            <div className={"email-footer"}>
                <div className={"email-options"}>
                    <input type={"checkbox"}/>
                    <i className={`fa fa-star ${props.important ? 'important' : ''}`}
                       onClick={handleClickImportant(props.index)}></i>
                    <i className={`fa fa-envelope-open ${props.archive ? 'archive' : ''}`}
                       onClick={handleClickArchive(props.index)}></i>
                    <i className={"fa fa-trash delete"} onClick={handleClickDelete(props.index)}></i>
                </div>
                <div className={"date"}>
                    <span>{props.date}</span>
                </div>
            </div>
        </div>
    )
};