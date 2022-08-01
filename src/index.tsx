import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Assets/css/variables.css';
import './Assets/fonts/fontawesome/fontawesome-free-6.1.1-web/css/all.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {getArchivedEmails, getEmails, getInboxEmails, getSentEmails, getUsers} from "./API/EmailAPI";
import {addUser} from "./Redux/ReducersUtils/reducersList";
import {store} from "./Redux/store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let emailList = getEmails();
let userList = getUsers();
userList.then((results) => {
   results['users'].forEach((result: {name: string, email: string}) => {
     store.dispatch(addUser(result));
   });
});
emailList.then((results) => {
    getArchivedEmails(results);
    getInboxEmails(results);
    getSentEmails(results);
    root.render(
        <BrowserRouter>

            <App/>

        </BrowserRouter>
    );
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
