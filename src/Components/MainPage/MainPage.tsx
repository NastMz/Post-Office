import React, {useState} from "react";
import './MainPage.css';
import {Navbar} from "../Navbar/Navbar";
import {Header} from "../Header/Header";
import {MenuBar} from "../MenuBar/MenuBar";
import {SendMailBox} from "../SendMailBox/SendMailBox";
import {AlertModal} from "../AlertModal/AlertModal";
import {getArchivedEmails, getEmails, getInboxEmails, getSentEmails, getUsers, payload} from "../../API/EmailAPI";
import {store} from "../../Redux/store";
import {addUser, removeUser, setProfile, unsetLoading, loading} from "../../Redux/ReducersUtils/reducersList";
import {Loader} from "../Loader/Loader";

interface Props {
    element: React.ReactElement
}

export const MainPage: React.FC<Props> = ({element}) => {

    const [isLoading, setLoading] = useState<boolean>(true);
    if (!isLoading) {

    }

    store.subscribe(() => {
        setLoading(store.getState().loadReducer);
    })

    return (
        <div className={"main-page"}>
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

