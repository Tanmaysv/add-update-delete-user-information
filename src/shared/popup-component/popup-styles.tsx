import styled from "styled-components";

export const PopupWrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 7rem;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
`;

export const PopupContent = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    margin: auto;
    padding: 1.2rem;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
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
