import IEmail from "../Models/Interfaces/IEmail";
import {store} from "../Redux/store";
import {add} from "../Redux/ReducersUtils/reducersList";

const apiUrl = "https://massmail-api.herokuapp.com/api"

export function getArchivedEmails(emailList: any) {
    if (emailList.hasOwnProperty('emails')) {
        emailList['emails'].forEach((email: IEmail) => {
            if (email.archive) {
                let exist = false;
                store.getState().emailsArchivedReducer.forEach((mail) => {
                    if (mail.index === email.index) {
                        exist = true;
                    }
                })
                if (!exist) {
                    store.dispatch(add(email, 'Archived'));
                }
            }
        });
    }
}

export function getInboxEmails(emailList: any) {
    if (emailList.hasOwnProperty('emails')) {
        emailList['emails'].forEach((email: IEmail) => {
            if (!email.archive && email.context === 'inbox') {
                let exist = false;
                store.getState().emailsInboxReducer.forEach((mail) => {
                    if (mail.index === email.index) {
                        exist = true;
                    }
                })
                if (!exist) {
                    store.dispatch(add(email, 'Inbox'));
                }
            }
        });
    }
}

export function getSentEmails(emailList: any) {
    if (emailList.hasOwnProperty('emails')) {
        emailList['emails'].forEach((email: IEmail) => {
            if (!email.archive && email.context === 'send') {
                let exist = false;
                store.getState().emailsSentReducer.forEach((mail) => {
                    if (mail.index === email.index) {
                        exist = true;
                    }
                })
                if (!exist) {
                    store.dispatch(add(email, 'Sent'));
                }
            }
        });
    }
}

export function getEmails() {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    `Bearer ${sessionStorage.getItem('e-token')}`,
            },
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/inbox`);
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
                    `Bearer ${sessionStorage.getItem('e-token')}`,
            },
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/users`);
    }

    return loadJson();
}

export function setEmailAsImportant(index: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    `Bearer ${sessionStorage.getItem('e-token')}`,
            },
            body: JSON.stringify({index: index})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/important`);
    }

    return loadJson();
}

export function setEmailAsRead(index: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    `Bearer ${sessionStorage.getItem('e-token')}`,
            },
            body: JSON.stringify({index: index})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/read`);
    }

    return loadJson();
}

export function setEmailAsArchived(index: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    `Bearer ${sessionStorage.getItem('e-token')}`,
            },
            body: JSON.stringify({index: index})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/archive`);
    }

    return loadJson();
}

export function deleteEmail(index: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    `Bearer ${sessionStorage.getItem('e-token')}`,
            },
            body: JSON.stringify({index: index})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/delete`);
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
                    `Bearer ${sessionStorage.getItem('e-token')}`,
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
        return loadUrl(`${apiUrl}/send`);
    }

    return loadJson();
}

export function unsetEmailAsImportant(index: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    `Bearer ${sessionStorage.getItem('e-token')}`,
            },
            body: JSON.stringify({index: index})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/unmark/important`);
    }

    return loadJson();
}

export function unsetEmailAsRead(index: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    `Bearer ${sessionStorage.getItem('e-token')}`,
            },
            body: JSON.stringify({index: index})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/unmark/read`);
    }

    return loadJson();
}

export function unsetEmailAsArchived(index: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    `Bearer ${sessionStorage.getItem('e-token')}`,
            },
            body: JSON.stringify({index: index})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/unmark/archive`);
    }

    return loadJson();
}

export function validateToken(token: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({token: token})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/validate`);
    }

    return loadJson();
}

export function login(email: string, password: string) {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: email, pass: password})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/login`);
    }

    return loadJson()
}

export const register = (name: string, email: string, password: string) => {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: email, pass: password, name: name})
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/register`);
    }

    return loadJson()
}

export const payload = () => {
    async function loadUrl(url: string) {
        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${sessionStorage.getItem('e-token')}`,
            }
        });
        return response.json();
    }

    async function loadJson() {
        return loadUrl(`${apiUrl}/payload`);
    }

    return loadJson()
}