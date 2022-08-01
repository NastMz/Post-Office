import IEmail from "../Models/Interfaces/IEmail";
import {store} from "../Redux/store";
import {add} from "../Redux/ReducersUtils/reducersList";


export function getArchivedEmails(emailList: any) {

    emailList['emails'].forEach((email: IEmail) => {
        if (email.archive) {
            store.dispatch(add(email, 'Archived'));
        }
    });
}

export function getInboxEmails(emailList: any) {

    emailList['emails'].forEach((email: IEmail) => {
        if (!email.archive && email.context === 'inbox') {
            store.dispatch(add(email, 'Inbox'));
        }
    });
}

export function getSentEmails(emailList: any) {

    emailList['emails'].forEach((email: IEmail) => {
        if (!email.archive && email.context === 'send') {
            store.dispatch(add(email, 'Sent'));
        }
    });
}

export function getEmails() {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3QyQG1hc3NtYWlsLnNpdGUiLCJwYXNzIjoidGVzdDIifQ.MdqXoCXKDKHKSQCMfRI_4gxn-y5G8tMWPjUi1uN0_qo",
            },
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl("http://localhost:4000/api/inbox");
    }

    return loadJson();
}

export function getUsers() {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3QyQG1hc3NtYWlsLnNpdGUiLCJwYXNzIjoidGVzdDIifQ.MdqXoCXKDKHKSQCMfRI_4gxn-y5G8tMWPjUi1uN0_qo",
            },
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl("http://localhost:4000/api/users");
    }

    return loadJson();
}

export function setEmailAsImportant(index: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3QyQG1hc3NtYWlsLnNpdGUiLCJwYXNzIjoidGVzdDIifQ.MdqXoCXKDKHKSQCMfRI_4gxn-y5G8tMWPjUi1uN0_qo",
            },
            body: JSON.stringify({index: index})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl("http://localhost:4000/api/important");
    }

    return loadJson();
}

export function setEmailAsRead(index: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3QyQG1hc3NtYWlsLnNpdGUiLCJwYXNzIjoidGVzdDIifQ.MdqXoCXKDKHKSQCMfRI_4gxn-y5G8tMWPjUi1uN0_qo",
            },
            body: JSON.stringify({index: index})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl("http://localhost:4000/api/read");
    }

    return loadJson();
}

export function setEmailAsArchived(index: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3QyQG1hc3NtYWlsLnNpdGUiLCJwYXNzIjoidGVzdDIifQ.MdqXoCXKDKHKSQCMfRI_4gxn-y5G8tMWPjUi1uN0_qo",
            },
            body: JSON.stringify({index: index})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl("http://localhost:4000/api/archive");
    }

    return loadJson();
}

export function deleteEmail(index: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3QyQG1hc3NtYWlsLnNpdGUiLCJwYXNzIjoidGVzdDIifQ.MdqXoCXKDKHKSQCMfRI_4gxn-y5G8tMWPjUi1uN0_qo",
            },
            body: JSON.stringify({index: index})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl("http://localhost:4000/api/delete");
    }

    return loadJson();
}

export function sendEmail(to: string, subject: string, text: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRlc3QyQG1hc3NtYWlsLnNpdGUiLCJwYXNzIjoidGVzdDIifQ.MdqXoCXKDKHKSQCMfRI_4gxn-y5G8tMWPjUi1uN0_qo",
            },
            body: JSON.stringify({
                to: to,
                subject: subject,
                text: text
            })
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl("http://localhost:4000/api/send");
    }

    return loadJson();
}
