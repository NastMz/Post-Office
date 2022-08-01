import {store} from "../../Redux/store";
import IEmail from "../../Models/Interfaces/IEmail";
import Email from "../../Models/implements/Email";
import {reducerNames} from "../../Redux/ReducersUtils/reducerNames";

export function isActive(emailsReducer: string) {
    let emailActive = false;

    switch (emailsReducer) {
        case reducerNames[2]:
            for(const email of store.getState().emailsArchivedReducer) {
                if (email.active) {
                    emailActive = email.active;
                    break;
                }
            }
            break;
        case reducerNames[1]:
            store.getState().emailsSentReducer.forEach((email: IEmail) => {
                if (email.active) {
                    emailActive = email.active;
                }
            });
            break;
        case reducerNames[0]:
            store.getState().emailsInboxReducer.forEach((email: IEmail) => {
                if (email.active) {
                    emailActive = email.active;
                }
            });
            break;
    }

    return emailActive;
}

export function getActive(emailsReducer: string) {
    let emailActive = new Email();

    switch (emailsReducer) {
        case reducerNames[2]:
            store.getState().emailsArchivedReducer.forEach((email: IEmail) => {
                if (email.active) {
                    emailActive = email;
                }
            });
            break;
        case reducerNames[1]:
            store.getState().emailsSentReducer.forEach((email: IEmail) => {
                if (email.active) {
                    emailActive = email;
                }
            });
            break;
        case reducerNames[0]:
            store.getState().emailsInboxReducer.forEach((email: IEmail) => {
                if (email.active) {
                    emailActive = email;
                }
            });
            break;
    }

    return emailActive;
}