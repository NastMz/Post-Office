import {getArchivedEmails} from "../../API/EmailAPI";
import IEmail from "../../Models/Interfaces/IEmail";

export const emailsArchivedReducer = (state: Array<IEmail> = getArchivedEmails(), action: any) => {
    switch (action.type) {
        case '@emailArchived/create':
            return [...state, action.payload]
        case '@emailArchived/markAsRead':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        read: true
                    };
                }
                return email;
            })
        case '@emailArchived/markAsImportant':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        important: true
                    };
                }
                return email;
            })
        case '@emailArchived/unmarkAsImportant':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        important: false
                    };
                }
                return email;
            })
        case '@emailArchived/unmarkAsArchive':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        archive: false
                    };
                }
                return email;
            })
        case '@emailArchived/remove':
            return state.filter(email => email.index !== action.index);
        case '@emailArchived/markAsActive':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        active: true
                    };
                }
                return email;
            })
        case '@emailArchived/unmarkAsActive':
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