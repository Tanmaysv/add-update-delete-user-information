import styled from "styled-components";

export const InputHeader = styled.div`
    font-weight: bold;
    margin-bottom: 0.2rem;
`;

type StyledInputProps = {
    width?: string;
};

export const StyledInput = styled.input<StyledInputProps>`
    width: ${(props) => (props.width ? props.width : "auto")};
    height: 2rem;
    border-radius: 0.2rem;
    border: 1.5px solid ${({ theme }) => theme.borderColor};
    text-overflow: ellipsis;
    background-color: ${({ theme }) => theme.backgroundColor};
    &:focus {
        border: 1.5px solid;
    }
    &::placeholder {
        color: ${({ theme }) => theme.borderColor};
    }
`;
