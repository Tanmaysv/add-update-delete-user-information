import { ApplicationState } from "./applicationState";
import customersReducer from "../customers/redux/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers<ApplicationState>({
    customers: customersReducer,
});

export default rootReducer;
