import React from "react";
import { InputHeader, StyledInput } from "./input-styles";

type Props = {
    title?: string;
    id?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
};

const InputComponent: React.FC<Props> = ({
    title,
    id,
    placeholder,
    value,
    onChange,
    width,
}: Props) => (
    <>
        {title && <InputHeader>{title}:</InputHeader>}
        <StyledInput
            placeholder={placeholder}
            type="text"
            name={title}
            id={id}
            value={value}
            onChange={onChange}
            width={width}
        />
    </>
);

export default InputComponent;
