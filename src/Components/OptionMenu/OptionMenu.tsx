import React, {useEffect, useState} from "react";
import './OptionMenu.css';
import {Dropdown} from "../Dropdown/Dropdown";
import {store} from "../../Redux/store";
import {
    add,
    checkAll,
    closeDropdown,
    isCheck,
    isUncheck,
    markAsArchive,
    markAsImportant,
    openDropdown,
    remove,
    uncheckAll,
    unmarkAsActive,
    unmarkAsArchive,
    unmarkAsImportant
} from "../../Utils/Reducers/reducersList";
import IEmail from "../../Models/Interfaces/IEmail";
import {reducerNames} from "../../Utils/Reducers/reducerNames";

export const OptionMenu: React.FC = () => {

    const [isOpen, setOpen] = useState<boolean>(store.getState().dropdownReducer);
    const [isChecked, setChecked] = useState<boolean>(false);

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
                        if (email.important) {
                            store.dispatch(unmarkAsImportant(email.index, reducerNames[0]));
                        } else {
                            store.dispatch(markAsImportant(email.index, reducerNames[0]));
                        }
                    }
                });
                store.dispatch(uncheckAll(reducerNames[0]));
                break;
            case 1:
                store.getState().emailsSentReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        if (email.important) {
                            store.dispatch(unmarkAsImportant(email.index, reducerNames[1]));
                        } else {
                            store.dispatch(markAsImportant(email.index, reducerNames[1]));
                        }
                    }
                });
                store.dispatch(uncheckAll(reducerNames[1]));
                break;
            case 2:
                store.getState().emailsArchivedReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        if (email.important) {
                            store.dispatch(unmarkAsImportant(email.index, reducerNames[2]));
                        } else {
                            store.dispatch(markAsImportant(email.index, reducerNames[2]));
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
                        store.dispatch(markAsArchive(email.index, reducerNames[0]));
                        if (email.active) {
                            store.dispatch(unmarkAsActive(email.index, reducerNames[2]));
                        }
                    }
                });
                store.getState().emailsInboxReducer.forEach(email => {
                    if (email.selected) {
                        store.dispatch(add(email, 'Archived'));
                        store.dispatch(remove(email.index, reducerNames[0]));
                    }
                });
                store.dispatch(uncheckAll(reducerNames[0]));
                store.dispatch(uncheckAll(reducerNames[2]));
                break;
            case 1:
                store.getState().emailsSentReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        store.dispatch(markAsArchive(email.index, reducerNames[1]));
                        if (email.active) {
                            store.dispatch(unmarkAsActive(email.index, reducerNames[2]));
                        }
                    }
                });
                store.getState().emailsSentReducer.forEach(email => {
                    if (email.selected) {
                        store.dispatch(add(email, 'Archived'));
                        store.dispatch(remove(email.index, reducerNames[1]));
                    }
                });
                store.dispatch(uncheckAll(reducerNames[1]));
                store.dispatch(uncheckAll(reducerNames[2]));
                break;
            case 2:
                store.getState().emailsArchivedReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        store.dispatch(unmarkAsArchive(email.index));
                        if (email.active) {
                            store.dispatch(unmarkAsActive(email.index, reducerNames[2]));
                        }
                    }
                });
                store.getState().emailsArchivedReducer.forEach(email => {
                    if (email.selected) {
                        store.dispatch(add(email, (email.context === 'send' ? reducerNames[1] : reducerNames[0])));
                        store.dispatch(remove(email.index, reducerNames[2]));
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
        switch (store.getState().navbarReducer.index) {
            case 0:
                store.getState().emailsInboxReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        store.dispatch(remove(email.index, reducerNames[0]));
                    }
                });
                break;
            case 1:
                store.getState().emailsSentReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        store.dispatch(remove(email.index, reducerNames[1]));
                    }
                });
                break;
            case 2:
                store.getState().emailsArchivedReducer.forEach((email: IEmail) => {
                    if (email.selected) {
                        store.dispatch(remove(email.index, reducerNames[2]));
                    }
                });
                break;
        }
    };

        const setStatusChecked = () => {
            if (isChecked !== store.getState().checkedReducer) {
                setChecked(store.getState().checkedReducer);
            }
        }

        store.subscribe(() => {
            setOpen(store.getState().dropdownReducer);
            setStatusChecked();
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
                        <i className="fa fa-envelope-open"></i>
                    </div>
                    <div className={`option-btn`} onClick={handleClickDelete}>
                        <i className="fa fa-trash"></i>
                    </div>
                </div>
            </div>
        )
    };