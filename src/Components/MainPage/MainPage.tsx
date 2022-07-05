import React from "react";
import './MainPage.css';
import {Navbar} from "../Navbar/Navbar";
import {Header} from "../Header/Header";
import {MenuBar} from "../MenuBar/MenuBar";
import {SendMailBox} from "../SendMailBox/SendMailBox";

interface Props {
    element: React.ReactElement
}

export const MainPage: React.FC<Props> = ({element}) => {
    return (
        <div className={"main-page"}>
            <Navbar/>
            <main>
                <Header/>
                <MenuBar />
                {element}
                <SendMailBox name={'Jonh Doe'} email={'johndoe@email.com'} />
            </main>
        </div>
    )
}

