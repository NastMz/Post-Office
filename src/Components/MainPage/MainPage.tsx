import React from "react";
import './MainPage.css';
import {Navbar} from "../Navbar/Navbar";
import {Header} from "../Header/Header";
import {MenuBar} from "../MenuBar/MenuBar";

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
            </main>
        </div>
    )
}

