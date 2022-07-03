import {store} from "../../Redux/store";
import IEmail from "../../Models/Interfaces/IEmail";
import Email from "../../Models/implements/Email";
import {reducers} from "./ReducersNames";

export function isActive(emailsReducer: string) {
    let emailActive = false;

    switch (emailsReducer) {
        case reducers[0]:
            store.getState().emailsArchivedReducer.some((email: IEmail) => {
                if (email.active) {
                    emailActive = email.active;
                }
                return false;
            });
            break
        case reducers[1]:
            store.getState().emailsSendedReducer.some((email: IEmail) => {
                if (email.active) {
                    emailActive = email.active;
                }
                return false;
            });
            break;
        case reducers[2]:
            store.getState().emailsInboxReducer.some((email: IEmail) => {
                if (email.active) {
                    emailActive = email.active;
                }
                return false;
            });
            break
    }

    return emailActive;
}

export function getActive(emailsReducer: string) {
    let emailActive = new Email();

    switch (emailsReducer) {
        case reducers[0]:
            store.getState().emailsArchivedReducer.some((email: IEmail) => {
                if (email.active) {
                    emailActive = email;
                }
                return false;
            });
            break
        case reducers[1]:
            store.getState().emailsSendedReducer.some((email: IEmail) => {
                if (email.active) {
                    emailActive = email;
                }
                return false;
            });
            break;
        case reducers[2]:
            store.getState().emailsInboxReducer.some((email: IEmail) => {
                if (email.active) {
                    emailActive = email;
                }
                return false;
            });
            break
    }

    return emailActive;
}