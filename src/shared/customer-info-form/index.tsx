import React from "react";
import {
    BUTTON,
    USER_FIELDS,
    USER_FIELDS_IDS,
    USER_FIELDS_PLACEHOLDER,
} from "../../constants";
import ButtonComponent from "../button-component";
import InputComponent from "../input-component";
import {
    CustomerInfoFormInputWrapper,
    CustomInforFormButtonWrapper,
} from "./customer-info-form-styles";

type Props = {
    inputs: { [key: string]: string };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: any) => void;
    handleBack: () => void;
};

const CustomerInfoForm: React.FC<Props> = ({
    inputs,
    handleInputChange,
    handleSubmit,
    handleBack,
}: Props) => {
    return (
        <form onSubmit={handleSubmit}>
            <CustomerInfoFormInputWrapper>
                <InputComponent
                    title={USER_FIELDS.NAME}
                    id={USER_FIELDS_IDS.NAME}
                    placeholder={USER_FIELDS_PLACEHOLDER.NAME}
                    value={inputs[USER_FIELDS_IDS.NAME] ?? ""}
                    onChange={handleInputChange}
                    width={"99%"}
                />
            </CustomerInfoFormInputWrapper>
            <CustomerInfoFormInputWrapper>
                <InputComponent
                    title={USER_FIELDS.USERNAME}
                    id={USER_FIELDS_IDS.USERNAME}
                    placeholder={USER_FIELDS_PLACEHOLDER.USERNAME}
                    value={inputs[USER_FIELDS_IDS.USERNAME] ?? ""}
                    onChange={handleInputChange}
                    width={"99%"}
                />
            </CustomerInfoFormInputWrapper>
            <CustomerInfoFormInputWrapper>
                <InputComponent
                    title={USER_FIELDS.EMAIL}
                    id={USER_FIELDS_IDS.EMAIL}
                    placeholder={USER_FIELDS_PLACEHOLDER.EMAIL}
                    value={inputs[USER_FIELDS_IDS.EMAIL] ?? ""}
                    onChange={handleInputChange}
                    width={"99%"}
                />
            </CustomerInfoFormInputWrapper>
            <CustomerInfoFormInputWrapper>
                <InputComponent
                    title={USER_FIELDS.PHONE}
                    id={USER_FIELDS_IDS.PHONE}
                    placeholder={USER_FIELDS_PLACEHOLDER.PHONE}
                    value={inputs[USER_FIELDS_IDS.PHONE] ?? ""}
                    onChange={handleInputChange}
                    width={"99%"}
                />
            </CustomerInfoFormInputWrapper>
            <CustomInforFormButtonWrapper>
                <ButtonComponent text={BUTTON.SUBMIT} onClick={handleSubmit} />
                <ButtonComponent text={BUTTON.BACK} onClick={handleBack} />
            </CustomInforFormButtonWrapper>
        </form>
    );
};

export default CustomerInfoForm;
