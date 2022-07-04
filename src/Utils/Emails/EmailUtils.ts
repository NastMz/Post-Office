import {store} from "../../Redux/store";
import IEmail from "../../Models/Interfaces/IEmail";
import Email from "../../Models/implements/Email";
import {reducers} from "./ReducersNames";

export function isActive(emailsReducer: string) {
    let emailActive = false;

    console.log(store.getState());

    switch (emailsReducer) {
        case reducers[0]:
            for(const email of store.getState().emailsArchivedReducer) {
                if (email.active) {
                    emailActive = email.active;
                    break;
                }
            }
            break;
        case reducers[1]:
            store.getState().emailsSentReducer.forEach((email: IEmail) => {
                if (email.active) {
                    emailActive = email.active;
                }
            });
            break;
        case reducers[2]:
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
        case reducers[0]:
            store.getState().emailsArchivedReducer.forEach((email: IEmail) => {
                if (email.active) {
                    emailActive = email;
                }
            });
            break;
        case reducers[1]:
            store.getState().emailsSentReducer.forEach((email: IEmail) => {
                if (email.active) {
                    emailActive = email;
                }
            });
            break;
        case reducers[2]:
            store.getState().emailsInboxReducer.forEach((email: IEmail) => {
                if (email.active) {
                    emailActive = email;
                }
            });
            break;
    }

    return emailActive;
}