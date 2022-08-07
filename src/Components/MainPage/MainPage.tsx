import React, {useState} from "react";
import './MainPage.css';
import {Navbar} from "../Navbar/Navbar";
import {Header} from "../Header/Header";
import {MenuBar} from "../MenuBar/MenuBar";
import {SendMailBox} from "../SendMailBox/SendMailBox";
import {AlertModal} from "../AlertModal/AlertModal";
import {loadEmails, refresh} from "../../API/EmailAPI";
import {store} from "../../Redux/store";
import {Loader} from "../Loader/Loader";
import {loading} from "../../Redux/ReducersUtils/reducersList";

interface Props {
    element: React.ReactElement
}

store.dispatch(loading());
loadEmails();
refresh();

export const MainPage: React.FC<Props> = ({element}) => {

    const [isLoading, setLoading] = useState<boolean>(true);

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

