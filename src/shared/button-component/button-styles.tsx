import styled from "styled-components";

type StyledButtonProps = {
    width?: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    width: ${(props) => (props.width ? props.width : "auto")};
    border: 1.5px solid ${({ theme }) => theme.colors.lightGrey};
    background-color: ${({ theme }) => theme.colors.white};
    &:hover {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        cursor: pointer;
    }
`;
