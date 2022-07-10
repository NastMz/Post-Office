import {IMailBoxProps} from "../../Models/Interfaces/IMailBoxProps";

const reducerName = `@sendmailbox`;

export const sendMailBoxReducer = (state: IMailBoxProps = {
                                       email: {
                                           index: Math.random(),
                                           subject: '',
                                           message: '',
                                           from: '',
                                           name: '',
                                           to: '',
                                           date: new Date().toLocaleDateString(),
                                           important: false,
                                           selected: false,
                                           active: false,
                                           read: false,
                                           archive: false,
                                           context: "send"
                                       },
                                       isOpen: false,
                                       isMinimized: false
                                   }, action: any
) => {
    switch (action.type) {
        case `${reducerName}/open`:
            return {
                ...state,
                isOpen: true
            };
        case `${reducerName}/close`:
            return {
                ...state,
                isOpen: false
            };
        case `${reducerName}/minimize`:
            return {
                ...state,
                isMinimized: true
            };
        case `${reducerName}/maximize`:
            return {
                ...state,
                isMinimized: false
            };
        case `${reducerName}/set`:
            return {
                ...state,
                email: {
                    ...state.email,
                    name: action.payload.name,
                    to: action.payload.to,
                    from: action.payload.from,
                    subject: action.payload.subject,
                    message: action.payload.message,
                }
            };
        case `${reducerName}/reset`:
            return {
                ...state,
                email: {
                    ...state.email,
                    name: '',
                    to: '',
                    from: '',
                    subject: '',
                    message: ''
                },
                isMinimized: false,
            };
        default:
            return state;
    }
}