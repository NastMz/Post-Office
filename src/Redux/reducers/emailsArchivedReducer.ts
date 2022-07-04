import {getArchivedEmails} from "../../API/EmailAPI";
import IEmail from "../../Models/Interfaces/IEmail";

const reducerName = `@emailArchived`;

export const emailsArchivedReducer = (state: Array<IEmail> = getArchivedEmails(), action: any) => {
    switch (action.type) {
        case `${reducerName}/create`:
            return [...state, action.payload]
        case `${reducerName}/markAsRead`:
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        read: true
                    };
                }
                return email;
            })
        case `${reducerName}/markAsImportant`:
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        important: true
                    };
                }
                return email;
            })
        case `${reducerName}/unmarkAsImportant`:
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        important: false
                    };
                }
                return email;
            })
        case `${reducerName}/unmarkAsArchive`:
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        archive: false
                    };
                }
                return email;
            })
        case `${reducerName}/remove`:
            return state.filter(email => email.index !== action.index);
        case `${reducerName}/markAsActive`:
            return state.map((email) => {
                if (email.index === action.index) {
                    return {
                        ...email,
                        active: true
                    };
                }
                return email;
            })
        case `${reducerName}/unmarkAsActive`:
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