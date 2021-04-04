import React from "react";
import { StyledButton } from "./button-styles";

type Props = {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    width?: string;
};
const ButtonComponent: React.FC<Props> = ({ text, onClick, width }: Props) => (
    <StyledButton width={width} onClick={onClick}>
        {text}
    </StyledButton>
);

export default ButtonComponent;
