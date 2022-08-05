import React, {useEffect, useState} from "react";
import './MailCard.css';
import IEmail from "../../Models/Interfaces/IEmail";
import {store} from "../../Redux/store";
import {getActive} from "../../Utils/EmailsUtils/EmailUtils";
import {
    deleteDone,
    markAsActive,
    markAsRead,
    markAsSelected,
    resetArchive,
    resetInbox,
    resetSend,
    setAlertMessage,
    setLoading,
    showAlert,
    unmarkAsActive,
    unmarkAsSelected,
    unsetLoading
} from "../../Redux/ReducersUtils/reducersList";
import {reducerNames} from "../../Redux/ReducersUtils/reducerNames";
import {
    deleteEmail,
    setEmailAsArchived,
    setEmailAsImportant,
    setEmailAsRead,
    unsetEmailAsArchived,
    unsetEmailAsImportant
} from "../../API/EmailAPI";

interface Props {
    props: IEmail;
    reducer: string
}

export const MailCard: React.FC<Props> = ({props, reducer}) => {

        const [isDeleting, setDeleting] = useState<boolean>(false);
        const [deleteIndex, setDeleteIndex] = useState<number>(-1);

        const handleClickCard = (index: number) => () => {
            if (getActive(reducer).index === index) {
                store.dispatch(unmarkAsActive(index, reducer));
            } else {
                store.dispatch(unmarkAsActive(getActive(reducer).index, reducer));
                store.dispatch(markAsActive(index, reducer));
                setEmailAsRead(index.toString()).then(() => {
                    store.dispatch(markAsRead(index, reducer));
                })
            }
        };

        const handleClickImportant = (index: number) => () => {
            switch (reducer) {
                case reducerNames[2]:
                    store.dispatch(setLoading());
                    store.getState().emailsArchivedReducer.forEach(email => {
                        if (email.index === index) {
                            if (email.important) {
                                unsetEmailAsImportant(index.toString()).then(() => {
                                    store.dispatch(resetSend());
                                    store.dispatch(resetInbox());
                                    store.dispatch(resetArchive());
                                    store.dispatch(unsetLoading());
                                })
                            } else {
                                setEmailAsImportant(index.toString()).then(() => {
                                    store.dispatch(resetSend());
                                    store.dispatch(resetInbox());
                                    store.dispatch(resetArchive());
                                    store.dispatch(unsetLoading());
                                })
                            }
                        }
                    });
                    break;
                case reducerNames[1]:
                    store.dispatch(setLoading());
                    store.getState().emailsSentReducer.forEach(email => {
                        if (email.index === index) {
                            if (email.important) {
                                unsetEmailAsImportant(index.toString()).then(() => {
                                    store.dispatch(resetSend());
                                    store.dispatch(resetInbox());
                                    store.dispatch(resetArchive());
                                    store.dispatch(unsetLoading());
                                })
                            } else {
                                setEmailAsImportant(index.toString()).then(() => {
                                    store.dispatch(resetSend());
                                    store.dispatch(resetInbox());
                                    store.dispatch(resetArchive());
                                    store.dispatch(unsetLoading());
                                });
                            }
                        }
                    });
                    break;
                case reducerNames[0]:
                    store.dispatch(setLoading());
                    store.getState().emailsInboxReducer.forEach(email => {
                        if (email.important) {
                            unsetEmailAsImportant(index.toString()).then(() => {
                                store.dispatch(resetSend());
                                store.dispatch(resetInbox());
                                store.dispatch(resetArchive());
                                store.dispatch(unsetLoading());
                            });
                        } else {
                            setEmailAsImportant(index.toString()).then(() => {
                                store.dispatch(resetSend());
                                store.dispatch(resetInbox());
                                store.dispatch(resetArchive());
                                store.dispatch(unsetLoading());
                            });
                        }
                    });
                    break;
            }
        };

        const handleClickArchive = (index: number) => () => {
            switch (reducer) {
                case reducerNames[2]:
                    store.dispatch(setLoading());
                    store.getState().emailsArchivedReducer.forEach(email => {
                            if (email.index === index) {
                                unsetEmailAsArchived(index.toString()).then(() => {
                                    store.dispatch(resetSend());
                                    store.dispatch(resetInbox());
                                    store.dispatch(resetArchive());
                                    store.dispatch(unsetLoading());
                                });
                            }
                        }
                    );
                    break;
                case reducerNames[1]:
                    store.dispatch(setLoading());
                    store.getState().emailsSentReducer.forEach(email => {
                        if (email.index === index) {
                            setEmailAsArchived(index.toString()).then(() => {
                                store.dispatch(resetSend());
                                store.dispatch(resetInbox());
                                store.dispatch(resetArchive());
                                store.dispatch(unsetLoading());
                            });
                        }
                    });
                    break;
                case reducerNames[0]:
                    store.dispatch(setLoading());
                    store.getState().emailsInboxReducer.forEach(email => {
                        if (email.index === index) {
                            setEmailAsArchived(index.toString()).then(() => {
                                store.dispatch(resetSend());
                                store.dispatch(resetInbox());
                                store.dispatch(resetArchive());
                                store.dispatch(unsetLoading());
                            });
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
            store.dispatch(setAlertMessage(['¿Esta seguro que desea eliminar este correo?']));
            store.dispatch(showAlert());
            setDeleteIndex(index);
        }

        useEffect(() => {
            if (isDeleting) {
                store.dispatch(setLoading());
                deleteEmail(deleteIndex.toString()).then(() => {
                    store.dispatch(resetSend());
                    store.dispatch(resetInbox());
                    store.dispatch(resetArchive());
                    store.dispatch(deleteDone());
                    setDeleteIndex(-1);
                    store.dispatch(unsetLoading());
                });
            }
        }, [isDeleting]);

        store.subscribe(() => {
            setDeleting(store.getState().alertReducer.delete);
        });

        return (
            <div className={`mail-card ${props.read ? "read" : ''} ${props.active ? "active" : ''}`}>
                <div className={"email-header"}>
                    <div className={"user-from"}>
                        <i className={"fa fa-user-circle"}></i>
                        <span className="from">{reducer === 'Inbox' ? props.from_name : props.to_name}</span>
                    </div>
                    <i className={`fa fa-arrow-right see`} onClick={handleClickCard(props.index)}></i>
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
    }
;