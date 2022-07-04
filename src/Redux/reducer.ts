import {emailsArchivedReducer} from "./reducers/emailsArchivedReducer";
import {dropdownReducer} from "./reducers/dropdownReducer";
import {combineReducers} from "redux";
import {btnReducer} from "./reducers/btnReducer";
import {emailsInboxReducer} from "./reducers/emailsInboxReducer";
import {emailsSentReducer} from "./reducers/emailsSentReducer";

export default combineReducers({
    emailsArchivedReducer,
    emailsSentReducer,
    emailsInboxReducer,
    dropdownReducer,
    btnReducer
});