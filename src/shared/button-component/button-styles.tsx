import styled from "styled-components";

type StyledButtonProps = {
    width?: string;
    height?: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
    border: 1.5px solid ${({ theme }) => theme.borderColor};
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.textColor};
    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.textColor};
        color: ${({ theme }) => theme.backgroundColor};
        cursor: pointer;
    }
    &:disabled {
        cursor: not-allowed;
    }
`;
