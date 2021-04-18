import styled, { keyframes } from "styled-components";

export const LoadAnimation = keyframes`
    from {
        transform: rotate(0turn);
    }
    to {
        transform: rotate(1turn);
    }
`;

export const StyledLoadingIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    &::after {
        content: "";
        width: 50px;
        height: 50px;
        border: 10px solid #dddddd;
        border-top-color: ${({ theme }) => theme.textColor};
        border-radius: 50%;
        animation: ${LoadAnimation} 1s ease infinite;
    }
`;
