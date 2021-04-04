export type CustomerType = {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone: string;
    createdDate: string;
};

export type CustomersType = {
    customerList: CustomerType[];
    isCustomerEdited: boolean;
    isCustomerAdded: boolean;
    isCustomerDeleted: boolean;
    isLoading: boolean;
    error: string;
};

export const initialCustomerState: CustomerType = {
    id: 0,
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phone: "",
    createdDate: "",
};

export const initialCustomersState: CustomersType = {
    customerList: [] as CustomerType[],
    isCustomerDeleted: false,
    isCustomerEdited: false,
    isCustomerAdded: false,
    isLoading: false,
    error: "",
};

export type CustomersState = typeof initialCustomersState;
