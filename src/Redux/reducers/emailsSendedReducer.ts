import {getArchivedEmails, getSendedEmails} from "../../API/EmailAPI";
import IEmail from "../../Models/Interfaces/IEmail";

export const emailsSendedReducer = (state: Array<IEmail> = getSendedEmails(), action: any) => {
    switch (action.type) {
        case '@emailSended/create':
            return [...state, action.payload]
        case '@emailSended/markAsImportant':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        important: true
                    };
                }
                return email;
            })
        case '@emailSended/unmarkAsImportant':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        important: false
                    };
                }
                return email;
            })
        case '@emailSended/markAsArchive':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        archive: true
                    };
                }
                return email;
            })
        case '@emailSended/remove':
            return {...state.filter(email => email.index !== action.index)}
        case '@emailSended/markAsActive':
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        active: true
                    };
                }
                return email;
            })
        case '@emailSended/unmarkAsActive':
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