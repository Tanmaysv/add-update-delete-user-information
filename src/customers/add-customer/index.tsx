import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addCustomer } from "../redux/actions";
import { CustomersState } from "../redux/state";
import UseInputChange from "../../shared/custom-hooks/use-input-change";
import { FormType } from "../../shared/type";
import CustomerInfoForm from "../../shared/customer-info-form";
import { ApplicationState } from "../../store/applicationState";
import { AddCustomerHeader, AddCustomerWrapper } from "./add-customer-styles";

const AddCustomer: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const history = useHistory();

    const { isCustomerAdded } = useSelector<ApplicationState, CustomersState>(
        (state) => state.customers
    );
    const { inputs, handleInputChange } = UseInputChange({} as FormType);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(addCustomer.request({ userInfo: inputs }));
    };

    const handleBack = () => history.push("/");

    useEffect(() => {
        isCustomerAdded && history.push("/");
    }, [isCustomerAdded]);

    return (
        <AddCustomerWrapper>
            <AddCustomerHeader>Add User</AddCustomerHeader>
            <CustomerInfoForm
                inputs={inputs}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                handleBack={handleBack}
            />
        </AddCustomerWrapper>
    );
};

export default AddCustomer;
