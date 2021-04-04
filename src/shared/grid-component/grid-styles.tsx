import { Grid } from "@progress/kendo-react-grid";
import styled from "styled-components";

export const StyledGrid = styled(Grid)`
    border: 1.5px solid ${({ theme }) => theme.colors.lightGrey};
    .k-grid-header {
        font-weight: bold;
    }
    /* .k-grid-content {
        overflow-y: auto;
    } */
    tr.k-alt {
        background-color: ${({ theme }) => theme.colors.white};
    }
`;
