import { ActionType, createReducer, getType } from "typesafe-actions";
import {
    addCustomer,
    CustomersActions,
    deleteCustomer,
    editCustomer,
    fetchCustomerList,
} from "./actions";
import { getUpdatedCustomerList } from "./helper";
import { CustomersState, CustomerType, initialCustomersState } from "./state";

export default createReducer<CustomersState, CustomersActions>(
    initialCustomersState,
    {
        [getType(fetchCustomerList.request)]: (state: CustomersState) => {
            return {
                ...state,
                customerList: [] as CustomerType[],
            };
        },
        [getType(fetchCustomerList.success)]: (
            state: CustomersState,
            action: ActionType<typeof fetchCustomerList.success>
        ) => {
            return {
                ...state,
                customerList: action.payload as CustomerType[],
            };
        },
        [getType(fetchCustomerList.failure)]: (
            state: CustomersState,
            action: ActionType<typeof fetchCustomerList.failure>
        ) => {
            return {
                ...state,
                customerList: [] as CustomerType[],
                error: action.payload,
            };
        },
        [getType(deleteCustomer.request)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerDeleted: false,
            };
        },
        [getType(deleteCustomer.success)]: (
            state: CustomersState,
            action: ActionType<typeof deleteCustomer.success>
        ) => {
            return {
                ...state,
                isCustomerDeleted: true,
                customerList: [...state.customerList].filter(
                    (cust) => cust.id !== Number(action.payload)
                ),
            };
        },
        [getType(deleteCustomer.failure)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerDeleted: false,
            };
        },
        [getType(deleteCustomer.cancel)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerDeleted: false,
            };
        },
        [getType(editCustomer.request)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerEdited: false,
            };
        },
        [getType(editCustomer.success)]: (
            state: CustomersState,
            action: ActionType<typeof editCustomer.success>
        ) => {
            return {
                ...state,
                isCustomerEdited: true,
                customerList: getUpdatedCustomerList(
                    state.customerList,
                    action.payload.userInfo,
                    action.payload.id,
                    true
                ),
            };
        },
        [getType(editCustomer.failure)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerEdited: false,
            };
        },
        [getType(editCustomer.cancel)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerEdited: false,
            };
        },
        [getType(addCustomer.request)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerAdded: false,
            };
        },
        [getType(addCustomer.success)]: (
            state: CustomersState,
            action: ActionType<typeof addCustomer.success>
        ) => {
            return {
                ...state,
                isCustomerAdded: true,
                customerList: getUpdatedCustomerList(
                    state.customerList,
                    action.payload.userInfo,
                    action.payload.id,
                    false
                ),
            };
        },
        [getType(addCustomer.failure)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerAdded: false,
            };
        },
        [getType(addCustomer.cancel)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerAdded: false,
            };
        },
    }
);
