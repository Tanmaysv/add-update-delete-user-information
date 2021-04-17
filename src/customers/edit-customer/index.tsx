import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { editCustomer } from "../redux/actions";
import { CustomersState } from "../redux/state";
import UseInputChange from "../../shared/custom-hooks/use-input-change";
import { FormType } from "../../shared/type";
import CustomerInfoForm from "../../shared/customer-info-form";
import { ApplicationState } from "../../store/applicationState";
import {
    EditCustomerHeader,
    EditCustomerWrapper,
} from "./edit-customer-styles";
import LoadingIcon from "../../shared/loading-icon";
import { isSubmitButtonDisabled } from "../helpers/is-submit-button-disabled";

const EditCustomer: React.FC = (props: any) => {
    const dispatch: Dispatch<any> = useDispatch();
    const history = useHistory();
    const { customerList, isCustomerEdited, isLoading } = useSelector<
        ApplicationState,
        CustomersState
    >((state) => state.customers);
    const userId = props.match.params.user_id;

    const currentUser = customerList.filter(
        (cust) => cust.id === Number(userId)
    )[0];
    const {
        first_name = "",
        last_name = "",
        username = "",
        email = "",
        phone = "",
    } = currentUser;
    const initialInput: FormType = {
        name: `${first_name} ${last_name}`,
        username: username,
        email: email,
        phone: phone,
    };
    const { inputs, handleInputChange } = UseInputChange(
        initialInput as FormType
    );

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(editCustomer.request({ id: userId, userInfo: inputs }));
    };

    const handleBack = () => history.push("/");

    useEffect(() => {
        isCustomerEdited && history.push("/");
    }, [isCustomerEdited, history]);

    return (
        <EditCustomerWrapper>
            {isLoading && <LoadingIcon />}
            <EditCustomerHeader>Edit User</EditCustomerHeader>
            <CustomerInfoForm
                inputs={inputs}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                handleBack={handleBack}
                isSubmitButtonDisabled={isSubmitButtonDisabled(
                    initialInput,
                    inputs
                )}
            />
        </EditCustomerWrapper>
    );
};

export default EditCustomer;
