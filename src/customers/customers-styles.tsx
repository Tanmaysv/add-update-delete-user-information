import styled from "styled-components";
import SearchBarComponent from "../shared/search-bar-component";
import { StyledSearchBar } from "../shared/search-bar-component/search-bar-styles";

export const CustomerWrapper = styled.div`
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

export const CustomerHeader = styled.h1`
    margin: 0.5rem 0 0.7rem 0;
`;

export const CustomerSearchBarWrapper = styled(StyledSearchBar)`
    margin-bottom: 0.7rem;
`;

export const CustomerButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.7rem;
`;
