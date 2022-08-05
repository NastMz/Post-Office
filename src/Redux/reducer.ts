import {emailsArchivedReducer} from "./reducers/emailsArchivedReducer";
import {dropdownReducer} from "./reducers/dropdownReducer";
import {combineReducers} from "redux";
import {emailsInboxReducer} from "./reducers/emailsInboxReducer";
import {emailsSentReducer} from "./reducers/emailsSentReducer";
import {navbarReducer} from "./reducers/navbarReducer";
import {searchBarReducer} from "./reducers/searchBarReducer";
import {checkedReducer} from "./reducers/checkedReducer";
import {sendMailBoxReducer} from "./reducers/sendMailBoxReducer";
import {alertReducer} from "./reducers/alertReducer";
import {usersReducer} from "./reducers/usersReducer";
import {profileReducer} from "./reducers/profileReducer";
import {loadReducer} from "./reducers/loadReducer";

export default combineReducers({
    emailsArchivedReducer,
    emailsSentReducer,
    emailsInboxReducer,
    navbarReducer,
    checkedReducer,
    searchBarReducer,
    dropdownReducer,
    sendMailBoxReducer,
    alertReducer,
    usersReducer,
    profileReducer,
    loadReducer
});