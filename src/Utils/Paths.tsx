import {Inbox} from "../Pages/Inbox/Inbox";
import {MainPage} from "../Components/MainPage/MainPage";
import React from "react";
import {SendMails} from "../Pages/SendMails/SendMails";
import {ArchiveMails} from "../Pages/ArchiveMails/ArchiveMails";

export const Paths = [
    {
        name: 'Recibidos',
        icon: <i className='fa fa-envelope'></i>,
        pathname: '/',
        element: <MainPage element={<Inbox/>}/>
    },
    {
        name: 'Enviados',
        icon: <i className='fa fa-paper-plane'></i>,
        pathname: '/send',
        element: <MainPage element={<SendMails/>}/>
    },
    {
        name: 'Archivados',
        icon: <i className='fa fa-envelope-open'></i>,
        pathname: '/archive',
        element: <MainPage element={<ArchiveMails/>}/>
    }
];