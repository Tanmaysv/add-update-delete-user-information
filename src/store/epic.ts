import { combineEpics } from "redux-observable";
import {
    addCustomerEpic,
    deleteCustomerEpic,
    editCustomerEpic,
    fetchCustomerListEpic,
} from "../customers/redux/epic";

const rootEpic = combineEpics(
    fetchCustomerListEpic,
    deleteCustomerEpic,
    editCustomerEpic,
    addCustomerEpic
);

export default rootEpic;
