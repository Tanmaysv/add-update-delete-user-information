import { ActionType, createAsyncAction } from "typesafe-actions";
import { FormType } from "../../shared/type";
import {
    ADD_CUSTOMER_CANCEL,
    ADD_CUSTOMER_FAILURE,
    ADD_CUSTOMER_REQUEST,
    ADD_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_CANCEL,
    DELETE_CUSTOMER_FAILURE,
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_SUCCESS,
    EDIT_CUSTOMER_CANCEL,
    EDIT_CUSTOMER_FAILURE,
    EDIT_CUSTOMER_REQUEST,
    EDIT_CUSTOMER_SUCCESS,
    FETCH_CUSTOMER_LIST_CANCEL,
    FETCH_CUSTOMER_LIST_FAILURE,
    FETCH_CUSTOMER_LIST_REQUEST,
    FETCH_CUSTOMER_LIST_SUCCESS,
} from "./constants";
import { CustomerType } from "./state";

type DeleteCustomerRequestType = {
    id: string;
};

type EditCustomerRequestType = {
    id: string;
    userInfo: FormType;
};

type EditCustomerResponseType = EditCustomerRequestType;

type AddCustomerRequestType = {
    userInfo: FormType;
};

type AddCustomerResponseType = {
    id: string;
    userInfo: FormType;
};

export const fetchCustomerList = createAsyncAction(
    FETCH_CUSTOMER_LIST_REQUEST,
    FETCH_CUSTOMER_LIST_SUCCESS,
    FETCH_CUSTOMER_LIST_FAILURE,
    FETCH_CUSTOMER_LIST_CANCEL
)<void, CustomerType[], string, undefined>();

export const deleteCustomer = createAsyncAction(
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_FAILURE,
    DELETE_CUSTOMER_CANCEL
)<DeleteCustomerRequestType, string, string, undefined>();

export const editCustomer = createAsyncAction(
    EDIT_CUSTOMER_REQUEST,
    EDIT_CUSTOMER_SUCCESS,
    EDIT_CUSTOMER_FAILURE,
    EDIT_CUSTOMER_CANCEL
)<EditCustomerRequestType, EditCustomerResponseType, string, undefined>();

export const addCustomer = createAsyncAction(
    ADD_CUSTOMER_REQUEST,
    ADD_CUSTOMER_SUCCESS,
    ADD_CUSTOMER_FAILURE,
    ADD_CUSTOMER_CANCEL
)<AddCustomerRequestType, AddCustomerResponseType, string, undefined>();

export type CustomersActions =
    | ActionType<typeof fetchCustomerList>
    | ActionType<typeof deleteCustomer>
    | ActionType<typeof editCustomer>
    | ActionType<typeof addCustomer>;
