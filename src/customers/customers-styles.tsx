import styled from "styled-components";
import { StyledSearchBar } from "../shared/search-bar-component/search-bar-styles";

export const CustomerWrapper = styled.div`
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    background-color: ${({ theme }) => theme.backgroundColor};
`;

export const CustomerHeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CustomerHeaderTitle = styled.h1`
    margin: 0.5rem 0 0.7rem 0;
    color: ${({ theme }) => theme.textColor};
`;

export const ToggleButtonWrapper = styled.div`
    margin-top: 0.5rem;
`;

export const CustomerSearchBarWrapper = styled(StyledSearchBar)`
    margin-bottom: 0.7rem;
`;

export const CustomerButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.7rem;
`;
