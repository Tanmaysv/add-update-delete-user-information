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
                isLoading: true,
            };
        },
        [getType(fetchCustomerList.success)]: (
            state: CustomersState,
            action: ActionType<typeof fetchCustomerList.success>
        ) => {
            return {
                ...state,
                customerList: action.payload as CustomerType[],
                isLoading: false,
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
                isLoading: false,
            };
        },
        [getType(deleteCustomer.request)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerDeleted: false,
                isLoading: true,
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
                isLoading: false,
            };
        },
        [getType(deleteCustomer.failure)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerDeleted: false,
                isLoading: false,
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
                isLoading: true,
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
                isLoading: false,
            };
        },
        [getType(editCustomer.failure)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerEdited: false,
                isLoading: false,
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
                isLoading: true,
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
                isLoading: false,
            };
        },
        [getType(addCustomer.failure)]: (state: CustomersState) => {
            return {
                ...state,
                isCustomerAdded: false,
                isLoading: false,
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
