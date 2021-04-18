import styled from "styled-components";

export const PopupWrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const PopupContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${({ theme }) => theme.backgroundColor};
    margin: auto;
    padding: 1.2rem;
    border: 1px solid ${({ theme }) => theme.borderColor};
    width: 60%;
    border-radius: 0.4rem;
`;

export const PopupClose = styled.span`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover,
    &:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const PopupButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;
