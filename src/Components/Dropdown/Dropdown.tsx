import './Dropdown.css';
import React, {useRef} from "react";
import {store} from "../../Redux/store";
import {options} from "../../Utils/DropdownUtils/Options";
import {
    checkAll,
    closeDropdown,
    isUncheck,
    markAsSelected,
    uncheckAll,
    unmarkAsSelected
} from "../../Utils/ReducersUtils/reducersList";
import IEmail from "../../Models/Interfaces/IEmail";
import {reducerNames} from "../../Utils/ReducersUtils/reducerNames";

export const Dropdown: React.FC = () => {

    const dropdownRef = useRef<any>(null);

    const toggleDropdown = (e: MouseEvent)=>{
        if(dropdownRef.current && store.getState().dropdownReducer && !dropdownRef.current.contains(e.target)){
            store.dispatch(closeDropdown());
        }
    }

    document.addEventListener('mousedown',toggleDropdown)

    const markAllAsSelected = () => {
      switch (store.getState().navbarReducer.index) {
          case 0:
              store.dispatch(checkAll(reducerNames[0]));
              break;
          case 1:
              store.dispatch(checkAll(reducerNames[1]));
              break;
          case 2:
              store.dispatch(checkAll(reducerNames[2]));
              break;
      }
    };

    const unmarkAllAsSelected = () => {
        switch (store.getState().navbarReducer.index) {
            case 0:
                store.dispatch(uncheckAll(reducerNames[0]));
                break;
            case 1:
                store.dispatch(uncheckAll(reducerNames[1]));
                break;
            case 2:
                store.dispatch(uncheckAll(reducerNames[2]));
                break;
        }
    };

    const markAllImportantAsSelected = () => {
        switch (store.getState().navbarReducer.index) {
            case 0:
                store.getState().emailsInboxReducer.forEach((email: IEmail) => {
                    store.dispatch(unmarkAsSelected(email.index, reducerNames[0]));
                    if (email.important){
                        store.dispatch(markAsSelected(email.index, reducerNames[0]));
                    }
                });
                break;
            case 1:
                store.getState().emailsSentReducer.forEach((email: IEmail) => {
                    store.dispatch(unmarkAsSelected(email.index, reducerNames[1]));
                    if (email.important){
                        store.dispatch(markAsSelected(email.index, reducerNames[1]));
                    }
                });
                break;
            case 2:
                store.getState().emailsArchivedReducer.forEach((email: IEmail) => {
                    store.dispatch(unmarkAsSelected(email.index, reducerNames[2]));
                    if (email.important){
                        store.dispatch(markAsSelected(email.index, reducerNames[2]));
                    }
                });
                break;
        }
    };

    const markAllUnimportantAsSelected = () => {
        switch (store.getState().navbarReducer.index) {
            case 0:
                store.getState().emailsInboxReducer.forEach((email: IEmail) => {
                    store.dispatch(unmarkAsSelected(email.index, reducerNames[0]));
                    if (!email.important){
                        store.dispatch(markAsSelected(email.index, reducerNames[0]));
                    }
                });
                break;
            case 1:
                store.getState().emailsSentReducer.forEach((email: IEmail) => {
                    store.dispatch(unmarkAsSelected(email.index, reducerNames[1]));
                    if (!email.important){
                        store.dispatch(markAsSelected(email.index, reducerNames[1]));
                    }
                });
                break;
            case 2:
                store.getState().emailsArchivedReducer.forEach((email: IEmail) => {
                    store.dispatch(unmarkAsSelected(email.index, reducerNames[2]));
                    if (!email.important){
                        store.dispatch(markAsSelected(email.index, reducerNames[2]));
                    }
                });
                break;
        }
    };

    const handleClick = (option: number) => () => {
        switch (option) {
            case 1:
                markAllAsSelected();
                break;
            case 2:
                unmarkAllAsSelected();
                break;
            case 3:
                markAllImportantAsSelected();
                break;
            case 4:
                markAllUnimportantAsSelected();
                break;
        }
        if (store.getState().checkedReducer){
            store.dispatch(isUncheck());
        }
        else {
            store.dispatch(closeDropdown());
        }
    };

    return (
        <div className='dropdown-list' ref={dropdownRef}>
            <ul>
                {
                    options.map(option =>
                        <li onClick={handleClick(option.id)} key={option.id}>{option.name}</li>
                    )
                }
            </ul>
        </div>
    )
};