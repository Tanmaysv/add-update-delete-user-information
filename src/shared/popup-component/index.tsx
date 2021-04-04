import React from "react";
import ButtonComponent from "../button-component";
import {
    PopupButtonWrapper,
    PopupClose,
    PopupContent,
    PopupWrapper,
} from "./popup-styles";

type Props = {
    confirmationMsg: string;
    onSubmit: () => void;
    onClose: () => void;
};

const PopupComponent: React.FC<Props> = ({
    confirmationMsg,
    onSubmit,
    onClose,
}: Props) => {
    return (
        <PopupWrapper>
            <PopupContent>
                <PopupClose onClick={onClose}>&times;</PopupClose>
                <p>{confirmationMsg}</p>
                <PopupButtonWrapper>
                    <ButtonComponent text={"Yes"} onClick={onSubmit} />
                    <ButtonComponent text={"No"} onClick={onClose} />
                </PopupButtonWrapper>
            </PopupContent>
        </PopupWrapper>
    );
};

export default PopupComponent;
