import React, {useState} from "react";
import './MainPage.css';
import {Navbar} from "../Navbar/Navbar";
import {Header} from "../Header/Header";
import {MenuBar} from "../MenuBar/MenuBar";
import {SendMailBox} from "../SendMailBox/SendMailBox";
import {AlertModal} from "../AlertModal/AlertModal";
import {getArchivedEmails, getEmails, getInboxEmails, getSentEmails, getUsers, payload} from "../../API/EmailAPI";
import {store} from "../../Redux/store";
import {addUser, removeUser, setProfile} from "../../Redux/ReducersUtils/reducersList";
import {Loader} from "../Loader/Loader";

interface Props {
    element: React.ReactElement
}

export const MainPage: React.FC<Props> = ({element}) => {

    const [isLoading, setLoading] = useState<boolean>(true);
    const [isSending, setSending] = useState<boolean>(false);
    let emailList = getEmails();
    let userList = getUsers();
    let user = payload();
    user.then((u) => {
        setLoading(false);
        store.dispatch(setProfile({name: u.name, email: u.email}));
    });
    userList.then((results) => {
        if (results.hasOwnProperty('users')) {
            results['users'].forEach((result: { name: string, email: string }) => {
                store.dispatch(removeUser(result.email));
                store.dispatch(addUser(result));
            });
        }
    });
    emailList.then((results) => {
        if (!isSending) {
            setLoading(true);
            getArchivedEmails(results);
            getInboxEmails(results);
            getSentEmails(results);
            setLoading(false);
        }
    });

    store.subscribe(() => {
        setSending(store.getState().loadReducer);
    })

    return (
        <div className={"main-page"}>
            {
                isSending ?
                    <div className={"loader-background"}>
                        <Loader/>
                    </div>
                    : ''
            }
            <AlertModal/>
            <Navbar/>
            <main>
                <Header/>
                <MenuBar/>
                {isLoading ? <Loader/> : element}
            </main>
            <SendMailBox/>
        </div>
    )
}

