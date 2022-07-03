import {emailsArchivedReducer} from "./reducers/emailsArchivedReducer";
import {dropdownReducer} from "./reducers/dropdownReducer";
import {combineReducers} from "redux";
import {btnReducer} from "./reducers/btnReducer";
import {emailsInboxReducer} from "./reducers/emailsInboxReducer";
import {emailsSendedReducer} from "./reducers/emailsSendedReducer";

export default combineReducers({
    emailsArchivedReducer,
    emailsSendedReducer,
    emailsInboxReducer,
    dropdownReducer,
    btnReducer
});