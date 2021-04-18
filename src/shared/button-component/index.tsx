import React from "react";
import { StyledButton } from "./button-styles";

type Props = {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    width?: string;
    height?: string;
    isDisabled?: boolean;
};
const ButtonComponent: React.FC<Props> = ({
    text,
    onClick,
    width,
    height,
    isDisabled,
}: Props) => (
    <StyledButton height={height} width={width} onClick={onClick} disabled={isDisabled}>
        {text}
    </StyledButton>
);

export default ButtonComponent;
