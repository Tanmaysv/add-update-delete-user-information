import { Epic } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import {
    addCustomer,
    CustomersActions,
    deleteCustomer,
    editCustomer,
    fetchCustomerList,
} from "./actions";
import { CustomersState } from "./state";

type CustomerEpicType = Epic<
    CustomersActions,
    CustomersActions,
    CustomersState
>;

export const fetchCustomerListEpic: CustomerEpicType = (action$) => {
    return action$.pipe(
        filter(isActionOf(fetchCustomerList.request)),
        switchMap((action) =>
            from(
                fetch("https://reqres.in/api/users", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }).then((response) => response.json())
            ).pipe(
                map((response: any) => {
                    return fetchCustomerList.success(response.data);
                }),
                catchError((error) => of(fetchCustomerList.failure(error)))
            )
        )
    );
};

export const deleteCustomerEpic: CustomerEpicType = (action$) => {
    return action$.pipe(
        filter(isActionOf(deleteCustomer.request)),
        switchMap((action) =>
            from(
                fetch(`https://reqres.in/api/users/${action.payload.id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
            ).pipe(
                map(() => {
                    return deleteCustomer.success(action.payload.id);
                }),
                catchError((error) => of(deleteCustomer.failure(error)))
            )
        )
    );
};

export const editCustomerEpic: CustomerEpicType = (action$) => {
    return action$.pipe(
        filter(isActionOf(editCustomer.request)),
        switchMap((action) =>
            from(
                fetch(`https://reqres.in/api/users/${action.payload.id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(action.payload.userInfo),
                })
            ).pipe(
                map(() => {
                    return editCustomer.success(action.payload);
                }),
                catchError((error) => of(editCustomer.failure(error)))
            )
        )
    );
};

export const addCustomerEpic: CustomerEpicType = (action$) => {
    return action$.pipe(
        filter(isActionOf(addCustomer.request)),
        switchMap((action) =>
            from(
                fetch(`https://reqres.in/api/users`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(action.payload.userInfo),
                }).then((response) => response.json())
            ).pipe(
                map((response: any) => {
                    return addCustomer.success({
                        id: response.id,
                        userInfo: action.payload.userInfo,
                    });
                }),
                catchError((error) => of(addCustomer.failure(error)))
            )
        )
    );
};
