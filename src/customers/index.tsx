import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BUTTON, DELETE_POPUP } from "../constants";
import ButtonComponent from "../shared/button-component";
import GridComponent from "../shared/grid-component";
import LoadingIcon from "../shared/loading-icon";
import PopupComponent from "../shared/popup-component";
import SearchBarComponent from "../shared/search-bar-component";
import { ApplicationState } from "../store/applicationState";
import { CustomersColumn } from "./columns";
import {
    CustomerHeader,
    CustomerWrapper,
    CustomerSearchBarWrapper,
    CustomerButtonWrapper,
} from "./customers-styles";
import {
    addCustomer,
    deleteCustomer,
    editCustomer,
    fetchCustomerList,
} from "./redux/actions";
import { CustomersState, CustomerType } from "./redux/state";

const Customers: React.FC = () => {
    const [userId, setUserId] = useState<string>("");
    const history = useHistory();
    const dispatch: Dispatch<any> = useDispatch();
    const [searchValue, setSearchValue] = useState<string>("");
    const [filteredCustomerList, setFilteredCustomerList] = useState<
        CustomerType[]
    >([]);

    const {
        customerList,
        isLoading,
        isCustomerDeleted,
        isCustomerEdited,
        isCustomerAdded,
    } = useSelector<ApplicationState, CustomersState>(
        (state) => state.customers
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchValue(e.target.value);

    useEffect(() => {
        setFilteredCustomerList(customerList);
        if (customerList.length > 0 && searchValue) {
            const filtered = customerList.filter(
                (data) =>
                    data.first_name?.includes(searchValue) ||
                    data.last_name?.includes(searchValue) ||
                    data.email?.includes(searchValue) ||
                    data.phone?.includes(searchValue) ||
                    data.createdDate?.includes(searchValue)
            );
            setFilteredCustomerList(filtered);
        }
    }, [customerList, searchValue]);

    const handlePopupSubmit = () => {
        dispatch(
            deleteCustomer.request({
                id: userId,
            })
        );
    };

    const handlePopupClose = () => setUserId("");

    const handleDeleteClick = (userId: string) => setUserId(userId);

    useEffect(() => {
        isCustomerDeleted && setUserId("");
        dispatch(deleteCustomer.cancel());
    }, [isCustomerDeleted, dispatch]);

    useEffect(() => {
        !isCustomerEdited &&
            !isCustomerAdded &&
            dispatch(fetchCustomerList.request());
        dispatch(editCustomer.cancel());
        dispatch(addCustomer.cancel());
    }, []);

    return (
        <CustomerWrapper>
            {isLoading && <LoadingIcon />}
            <CustomerHeader>My Customers</CustomerHeader>
            <CustomerSearchBarWrapper>
                <SearchBarComponent
                    value={searchValue}
                    onChange={handleSearchChange}
                />
            </CustomerSearchBarWrapper>
            <CustomerButtonWrapper>
                <ButtonComponent
                    text={BUTTON.ADD_USER}
                    onClick={() => history.push("/add-user")}
                />
            </CustomerButtonWrapper>
            <GridComponent
                columns={CustomersColumn(handleDeleteClick)}
                data={filteredCustomerList}
            />
            {userId && (
                <PopupComponent
                    confirmationMsg={DELETE_POPUP.CONFIRMATION_MSG}
                    onSubmit={handlePopupSubmit}
                    onClose={handlePopupClose}
                />
            )}
        </CustomerWrapper>
    );
};

export default Customers;
