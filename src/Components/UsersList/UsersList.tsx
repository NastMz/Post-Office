import './UsersList.css';
import React, {useState} from "react";
import {store} from "../../Redux/store";
import {search} from "../../Utils/EmailsUtils/search";
import {resetSearchUser, setToMailbox} from "../../Redux/ReducersUtils/reducersList";

export const UsersList: React.FC = () => {

    const [userList, setUsersList] = useState<Array<any>>([]);

    store.subscribe(() => {
        if (store.getState().inputBarReducer !== '') {
            setUsersList(search(store.getState().usersReducer, store.getState().inputBarReducer))
        } else {
            setUsersList([]);
        }
    })

    const setUser = (email: string) => {
        store.dispatch(setToMailbox(email));
        store.dispatch(resetSearchUser());
    }

    return (
        <div className={`users-list ${userList.length > 0 ? 'showing' : ''}`}>
            {
                userList.map(user =>
                    <div className={'user-card'} onClick={() => setUser(user.email)} key={Math.random()}>
                        <i className={'fa fa-user-circle'}></i>
                        <span>{user.name}</span>
                    </div>
                )
            }
        </div>
    )
};