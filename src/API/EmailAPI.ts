import IEmail from "../Models/Interfaces/IEmail";
import {store} from "../Redux/store";
import {
    add,
    addUser,
    isUncheck,
    removeUser,
    resetArchive,
    resetInbox,
    resetSend,
    setProfile,
    unsetLoading
} from "../Redux/ReducersUtils/reducersList";

const apiUrl = "https://massmail-api.herokuapp.com/api"

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

function getDate(date: string) {
    let days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    let months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'diciembre']
    let d = new Date(date);
    let dayName = days[d.getDay()];
    let fullDate = [padTo2Digits(d.getDate()), months[d.getMonth()], d.getFullYear()].join(' de ');
    return [dayName, fullDate].join(", ");
}

function sort(emails: Array<IEmail>) {
    return emails.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date)
        return dateB.getTime() - dateA.getTime();
    });
}

export function getArchivedEmails(emailList: any) {
    if (emailList.hasOwnProperty('emails')) {
        let emails: Array<IEmail> = [];
        emailList['emails'].forEach((email: IEmail) => {
            if (email.archive) {
                let exist = false;
                store.getState().emailsArchivedReducer.forEach((mail) => {
                    if (mail.index === email.index) {
                        exist = true;
                    }
                })
                if (!exist) {
                    emails.push(email);
                }
            }
        });
        emails = sort(emails);
        emails.forEach((email) => {
            email.date = getDate(email.date);
            store.dispatch(add(email, 'Archived'));
        })
    }
}

export function getInboxEmails(emailList: any) {
    if (emailList.hasOwnProperty('emails')) {
        let emails: Array<IEmail> = [];
        emailList['emails'].forEach((email: IEmail) => {
            if (!email.archive && email.context === 'inbox') {
                let exist = false;
                store.getState().emailsInboxReducer.forEach((mail) => {
                    if (mail.index === email.index) {
                        exist = true;
                    }
                })
                if (!exist) {
                    emails.push(email);
                }
            }
        });
        emails = sort(emails);
        emails.forEach((email) => {
            email.date = getDate(email.date);
            store.dispatch(add(email, 'Inbox'));
        })
    }
}

export function getSentEmails(emailList: any) {
    if (emailList.hasOwnProperty('emails')) {
        let emails: Array<IEmail> = [];
        emailList['emails'].forEach((email: IEmail) => {
            if (!email.archive && email.context === 'send') {
                let exist = false;
                store.getState().emailsSentReducer.forEach((mail) => {
                    if (mail.index === email.index) {
                        exist = true;
                    }
                })
                if (!exist) {
                    emails.push(email);
                }
            }
        });
        emails = sort(emails);
        emails.forEach((email) => {
            email.date = getDate(email.date);
            store.dispatch(add(email, 'Sent'));
        })
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

export function loadEmails() {
    let emailList = getEmails();
    let userList = getUsers();
    let user = payload();
    user.then((u) => {
        store.dispatch(setProfile({name: u.name, email: u.email}));
        userList.then((results) => {
            if (results.hasOwnProperty('users')) {
                results['users'].forEach((result: { name: string, email: string }) => {
                    if (result.email !== store.getState().profileReducer.email) {
                        store.dispatch(removeUser(result.email));
                        store.dispatch(addUser(result));
                    }
                });
            }
        });
    });
    emailList.then((results) => {
        store.dispatch(resetSend());
        store.dispatch(resetInbox());
        store.dispatch(resetArchive());
        getArchivedEmails(results);
        getInboxEmails(results);
        getSentEmails(results);
        store.dispatch(unsetLoading());
        store.dispatch(isUncheck());
    });
}

export function refresh() {
    setInterval(() => {
        if (!store.getState().checkedReducer && !store.getState().loadReducer && !store.getState().alertReducer.status && !store.getState().readReducer) {
            let emailList = getEmails();
            let userList = getUsers();
            let user = payload();
            user.then((u) => {
                store.dispatch(setProfile({name: u.name, email: u.email}));
                userList.then((results) => {
                    if (results.hasOwnProperty('users')) {
                        results['users'].forEach((result: { name: string, email: string }) => {
                            if (result.email !== store.getState().profileReducer.email) {
                                store.dispatch(removeUser(result.email));
                                store.dispatch(addUser(result));
                            }
                        });
                    }
                });
            });
            emailList.then((results) => {
                getArchivedEmails(results);
                getInboxEmails(results);
                getSentEmails(results);
            });
        }
    }, 2000);
}
