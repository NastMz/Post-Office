import React from "react";
import './MailCard.css';
import IEmail from "../../Models/Interfaces/IEmail";
import {store} from "../../Redux/store";
import {getActive} from "../../Utils/EmailsUtils/EmailUtils";
import {
    add,
    markAsActive,
    unmarkAsActive,
    markAsArchive,
    markAsImportant,
    markAsRead,
    remove,
    unmarkAsArchive,
    unmarkAsImportant, unmarkAsSelected, markAsSelected
} from "../../Utils/ReducersUtils/reducersList";
import {reducerNames} from "../../Utils/ReducersUtils/reducerNames";

interface Props {
    props: IEmail;
    reducer: string
}

export const MailCard: React.FC<Props> = ({props, reducer}) => {

    const handleClickCard = (index: number) => () => {
        if (getActive(reducer).index === index) {
            store.dispatch(unmarkAsActive(index, reducer));
        } else {
            store.dispatch(unmarkAsActive(getActive(reducer).index, reducer));
            store.dispatch(markAsActive(index, reducer));
            store.dispatch(markAsRead(index, reducer));
        }
    };

    const handleClickImportant = (index: number) => () => {
        switch (reducer) {
            case reducerNames[2]:
                store.getState().emailsArchivedReducer.forEach(email => {
                    if (email.index === index) {
                        email.important ? store.dispatch(unmarkAsImportant(index, reducer)) : store.dispatch(markAsImportant(index, reducer));
                    }
                });
                break;
            case reducerNames[1]:
                store.getState().emailsSentReducer.forEach(email => {
                    if (email.index === index) {
                        email.important ? store.dispatch(unmarkAsImportant(index, reducer)) : store.dispatch(markAsImportant(index, reducer));
                    }
                });
                break;
            case reducerNames[0]:
                store.getState().emailsInboxReducer.forEach(email => {
                    if (email.index === index) {
                        email.important ? store.dispatch(unmarkAsImportant(index, reducer)) : store.dispatch(markAsImportant(index, reducer));
                    }
                });
                break;
        }
    };

    const handleClickArchive = (index: number) => () => {
        switch (reducer) {
            case reducerNames[2]:
                store.getState().emailsArchivedReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(unmarkAsArchive(index));
                        if (email.active) {
                            store.dispatch(unmarkAsActive(index, reducer));
                        }
                    }
                });
                store.getState().emailsArchivedReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(add(email, (email.context === 'send' ? reducerNames[1] : reducerNames[0])));
                        store.dispatch(remove(index, reducer));
                    }
                });
                break;
            case reducerNames[1]:
                store.getState().emailsSentReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(markAsArchive(index, reducer));
                        if (email.active) {
                            store.dispatch(unmarkAsActive(index, reducer));
                        }
                    }
                });
                store.getState().emailsSentReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(add(email, 'Archived'));
                        store.dispatch(remove(index, reducer));
                    }
                });
                break;
            case reducerNames[0]:
                store.getState().emailsInboxReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(markAsArchive(index, reducer));
                        if (email.active) {
                            store.dispatch(unmarkAsActive(index, reducer));
                        }
                    }
                });
                store.getState().emailsInboxReducer.forEach(email => {
                    if (email.index === index) {
                        store.dispatch(add(email, 'Archived'));
                        store.dispatch(remove(index, reducer));
                    }
                });
                break;
        }
    };

    const handleClickSelect = (index: number) => () => {
        switch (reducer) {
            case reducerNames[2]:
                store.getState().emailsArchivedReducer.forEach(email => {
                    if (email.index === index) {
                        email.selected ? store.dispatch(unmarkAsSelected(index, reducer)) : store.dispatch(markAsSelected(index, reducer));
                    }
                });
                break;
            case reducerNames[1]:
                store.getState().emailsSentReducer.forEach(email => {
                    if (email.index === index) {
                        email.selected ? store.dispatch(unmarkAsSelected(index, reducer)) : store.dispatch(markAsSelected(index, reducer));
                    }
                });
                break;
            case reducerNames[0]:
                store.getState().emailsInboxReducer.forEach(email => {
                    if (email.index === index) {
                        email.selected ? store.dispatch(unmarkAsSelected(index, reducer)) : store.dispatch(markAsSelected(index, reducer));
                    }
                });
                break;
        }
    };

    const handleClickDelete = (index: number) => () => {
        store.dispatch(remove(index, reducer));
    }

    return (
        <div className={`mail-card ${props.read ? "read" : ''} ${props.active ? "active" : ''}`}>
            <div className={"email-header"}>
                <div className={"user-from"}>
                    <i className={"fa fa-user-circle"}></i>
                    <span className="from">{props.name}</span>
                </div>
                <i className={`fa ${props.active ? 'fa-arrow-left' : 'fa-arrow-right'} see`} onClick={handleClickCard(props.index)}></i>
            </div>
            <span className={"subject"}>{props.subject}</span>
            <p className={"message"}>{props.message.length < 100 ? props.message : props.message.substring(0, 200).concat('...')}</p>
            <div className={"email-footer"}>
                <div className={"email-options"}>
                    <input type={"checkbox"} checked={props.selected} onChange={handleClickSelect(props.index)}/>
                    <i className={`fa fa-star ${props.important ? 'important' : ''}`}
                       onClick={handleClickImportant(props.index)}></i>
                    <i className={`fa fa-archive ${props.archive ? 'archive' : ''}`}
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