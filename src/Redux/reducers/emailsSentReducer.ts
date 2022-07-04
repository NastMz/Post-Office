import {getSentEmails} from "../../API/EmailAPI";
import IEmail from "../../Models/Interfaces/IEmail";

export const emailsSentReducer = (state: Array<IEmail> = getSentEmails(), action: any) => {
    switch (action.type) {
        case '@emailSent/create':
            return [...state, action.payload]
        case '@emailSent/markAsRead':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        read: true
                    };
                }
                return email;
            })
        case '@emailSent/markAsImportant':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        important: true
                    };
                }
                return email;
            });
        case '@emailSent/unmarkAsImportant':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        important: false
                    };
                }
                return email;
            });
        case '@emailSent/markAsArchive':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        archive: true
                    };
                }
                return email;
            });
        case '@emailSent/remove':
            return state.filter(email => email.index !== action.index);
        case '@emailSent/markAsActive':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        active: true
                    };
                }
                return email;
            });
        case '@emailSent/unmarkAsActive':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        active: false
                    };
                }
                return email;
            });
        default:
            return state;
    }
}