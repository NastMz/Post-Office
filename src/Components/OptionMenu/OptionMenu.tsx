import React, {useEffect, useState} from "react";
import './OptionMenu.css';
import {Dropdown} from "../Dropdown/Dropdown";
import {store} from "../../Redux/store";
import {
    checkAll,
    closeDropdown,
    deleteDone,
    isCheck,
    isUncheck,
    loading,
    openDropdown,
    setAlertMessage,
    showAlert,
    uncheckAll,
    unmarkAsActive
} from "../../Redux/ReducersUtils/reducersList";
import IEmail from "../../Models/Interfaces/IEmail";
import {reducerNames} from "../../Redux/ReducersUtils/reducerNames";
import {
    deleteEmail,
    loadEmails,
    setEmailAsArchived,
    setEmailAsImportant,
    unsetEmailAsArchived,
    unsetEmailAsImportant
} from "../../API/EmailAPI";

export const OptionMenu: React.FC = () => {

    const [isOpen, setOpen] = useState<boolean>(store.getState().dropdownReducer);
    const [isChecked, setChecked] = useState<boolean>(false);
    const [isDeleting, setDeleting] = useState<boolean>(false);

    const checks = () => {
        let name: string = '';

        switch (store.getState().navbarReducer.index) {
            case 0:
                name = reducerNames[0];
                break;
            case 1:
                name = reducerNames[1];
                break;
            case 2:
                name = reducerNames[2];
                break;
        }

        if (isChecked) {
            store.dispatch(isCheck());
            store.dispatch(checkAll(name));
        } else {
            if (!store.getState().dropdownReducer) {
                store.dispatch(isUncheck());
                store.dispatch(uncheckAll(name));
            } else {
                store.dispatch(closeDropdown());
            }
        }
    }

    useEffect(() => {
        checks();
    }, [isChecked]);

    const displayDropdown = () => {
        if (isOpen) {
            store.dispatch(closeDropdown());
        } else {
            store.dispatch(openDropdown());
        }
    }

    const handleClickImportant = () => {
        switch (store.getState().navbarReducer.index) {
            case 0:
                store.getState().emailsInboxReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        store.dispatch(loading());
                        if (email.important) {
                            unsetEmailAsImportant(email.index.toString()).then(() => {
                                loadEmails();
                            });
                        } else {
                            setEmailAsImportant(email.index.toString()).then(() => {
                                loadEmails();
                            });
                        }
                    }
                });
                store.dispatch(uncheckAll(reducerNames[0]));
                break;
            case 1:
                store.getState().emailsSentReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        store.dispatch(loading());
                        if (email.important) {
                            unsetEmailAsImportant(email.index.toString()).then(() => {
                                loadEmails();
                            });
                        } else {
                            setEmailAsImportant(email.index.toString()).then(() => {
                                loadEmails();
                            });
                        }
                    }
                });
                store.dispatch(uncheckAll(reducerNames[1]));
                break;
            case 2:
                store.getState().emailsArchivedReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        store.dispatch(loading());
                        if (email.important) {
                            unsetEmailAsImportant(email.index.toString()).then(() => {
                                loadEmails();
                            });
                        } else {
                            setEmailAsImportant(email.index.toString()).then(() => {
                                loadEmails();
                            });
                        }
                    }
                });
                store.dispatch(uncheckAll(reducerNames[2]));
                break;
        }
        store.dispatch(isUncheck());
    };

    const handleClickArchive = () => {
        switch (store.getState().navbarReducer.index) {
            case 0:
                store.getState().emailsInboxReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        store.dispatch(loading());
                        setEmailAsArchived(email.index.toString()).then(() => {
                            if (email.active) {
                                store.dispatch(unmarkAsActive(email.index, reducerNames[2]));
                            }
                            loadEmails();
                        });
                    }
                });
                store.dispatch(uncheckAll(reducerNames[0]));
                store.dispatch(uncheckAll(reducerNames[2]));
                break;
            case 1:
                store.getState().emailsSentReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        store.dispatch(loading());
                        setEmailAsArchived(email.index.toString()).then(() => {
                            if (email.active) {
                                store.dispatch(unmarkAsActive(email.index, reducerNames[2]));
                            }
                            loadEmails();
                        });
                    }
                });
                store.dispatch(uncheckAll(reducerNames[1]));
                store.dispatch(uncheckAll(reducerNames[2]));
                break;
            case 2:
                store.getState().emailsArchivedReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        store.dispatch(loading());
                        unsetEmailAsArchived(email.index.toString()).then(() => {
                            if (email.active) {
                                store.dispatch(unmarkAsActive(email.index, reducerNames[2]));
                            }
                            loadEmails();
                        });
                    }
                });
                store.dispatch(uncheckAll(reducerNames[2]));
                store.dispatch(uncheckAll(reducerNames[1]));
                store.dispatch(uncheckAll(reducerNames[0]));
                break;
        }
        store.dispatch(isUncheck());
    };

    const handleClickDelete = () => {
        store.dispatch(setAlertMessage(['¿Esta seguro que desea eliminar estos correos?']));
        store.dispatch(showAlert());
    };

    const deleteItems = () => {
        if (isDeleting) {
            switch (store.getState().navbarReducer.index) {
                case 0:
                    store.dispatch(loading());
                    store.getState().emailsInboxReducer.forEach((email: IEmail) => {
                        if (email.selected) {
                            deleteEmail(email.index.toString()).then(() => {
                            });
                        }
                    });
                    break;
                case 1:
                    store.dispatch(loading());
                    store.getState().emailsSentReducer.forEach((email: IEmail) => {
                        if (email.selected) {
                            deleteEmail(email.index.toString()).then(() => {
                            });
                        }
                    });
                    break;
                case 2:
                    store.dispatch(loading());
                    store.getState().emailsArchivedReducer.forEach((email: IEmail) => {
                        if (email.selected) {
                            deleteEmail(email.index.toString()).then(() => {
                            });
                        }
                    });
                    break;
            }
            store.dispatch(deleteDone());
            loadEmails();
        }
    }

    useEffect(() => {
        deleteItems();
    }, [isDeleting]);

    store.subscribe(() => {
        setOpen(store.getState().dropdownReducer);
        setChecked(store.getState().checkedReducer);
        setDeleting(store.getState().alertReducer.delete);
    });

    return (
        <div className="options">
            <div className={`option-menu ${isOpen ? "open" : ""}`}>
                <div className="dropdown-header">
                    <input type='checkbox' checked={isChecked} onChange={e => setChecked(e.target.checked)}/>
                    <i className="fa fa-caret-down" onClick={displayDropdown}></i>
                </div>
                <div className="dropdown-list-container">
                    {isOpen ? <Dropdown/> : ""}
                </div>
            </div>
            <div className="option-btns">
                <div className={`option-btn`} onClick={handleClickImportant}>
                    <i className="fa fa-star"></i>
                </div>
                <div className={`option-btn`} onClick={handleClickArchive}>
                    <i className="fa fa-archive"></i>
                </div>
                <div className={`option-btn`} onClick={handleClickDelete}>
                    <i className="fa fa-trash"></i>
                </div>
            </div>
        </div>
    )
};