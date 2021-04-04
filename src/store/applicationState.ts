import { initialCustomersState } from "../customers/redux/state";

export const initalApplicationState = {
    customers: initialCustomersState,
};

export type ApplicationState = typeof initalApplicationState;
