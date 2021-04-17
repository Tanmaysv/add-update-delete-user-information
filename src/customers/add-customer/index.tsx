import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import UseInputChange from "../../shared/custom-hooks/use-input-change";
import CustomerInfoForm from "../../shared/customer-info-form";
import LoadingIcon from "../../shared/loading-icon";
import { initialForm } from "../../shared/type";
import { ApplicationState } from "../../store/applicationState";
import { isSubmitButtonDisabled } from "../helpers/is-submit-button-disabled";
import { addCustomer } from "../redux/actions";
import { CustomersState } from "../redux/state";
import { AddCustomerHeader, AddCustomerWrapper } from "./add-customer-styles";

const AddCustomer: React.FC = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const history = useHistory();

    const { isCustomerAdded, isLoading } = useSelector<
        ApplicationState,
        CustomersState
    >((state) => state.customers);
    const { inputs, handleInputChange } = UseInputChange(initialForm);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(addCustomer.request({ userInfo: inputs }));
    };

    const handleBack = () => history.push("/");

    useEffect(() => {
        isCustomerAdded && history.push("/");
    }, [isCustomerAdded, history]);

    return (
        <AddCustomerWrapper>
            {isLoading && <LoadingIcon />}
            <AddCustomerHeader>Add User</AddCustomerHeader>
            <CustomerInfoForm
                inputs={inputs}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                handleBack={handleBack}
                isSubmitButtonDisabled={isSubmitButtonDisabled(
                    initialForm,
                    inputs
                )}
            />
        </AddCustomerWrapper>
    );
};

export default AddCustomer;
