import {getInboxEmails} from "../../API/EmailAPI";
import IEmail from "../../Models/Interfaces/IEmail";

export const emailsInboxReducer = (state: Array<IEmail> = getInboxEmails(), action: any) => {
    switch (action.type) {
        case '@emailInbox/create':
            return [...state, action.payload]
        case '@emailInbox/markAsRead':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        read: true
                    };
                }
                return email;
            })
        case '@emailInbox/markAsImportant':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        important: true
                    };
                }
                return email;
            })
        case '@emailInbox/unmarkAsImportant':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        important: false
                    };
                }
                return email;
            })
        case '@emailInbox/markAsArchive':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        archive: true
                    };
                }
                return email;
            })
        case '@emailInbox/remove':
            return state.filter(email => email.index !== action.index);
        case '@emailInbox/markAsActive':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        active: true
                    };
                }
                return email;
            })
        case '@emailInbox/unmarkAsActive':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        active: false
                    };
                }
                return email;
            })
        default:
            return state;
    }
}