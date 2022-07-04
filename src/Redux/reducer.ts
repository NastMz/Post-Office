import {emailsArchivedReducer} from "./reducers/emailsArchivedReducer";
import {dropdownReducer} from "./reducers/dropdownReducer";
import {combineReducers} from "redux";
import {btnReducer} from "./reducers/btnReducer";
import {emailsInboxReducer} from "./reducers/emailsInboxReducer";
import {emailsSentReducer} from "./reducers/emailsSentReducer";
import {navbarReducer} from "./reducers/navbarReducer";
import {searchBarReducer} from "./reducers/searchBarReducer";

export default combineReducers({
    emailsArchivedReducer,
    emailsSentReducer,
    emailsInboxReducer,
    navbarReducer,
    searchBarReducer,
    dropdownReducer,
    btnReducer
});