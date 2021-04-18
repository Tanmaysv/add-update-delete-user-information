import { Grid } from "@progress/kendo-react-grid";
import styled from "styled-components";
import { colors } from "../../themes/theme";

export const StyledGrid = styled(Grid)`
    /* border: 1.5px solid ${({ theme }) => theme.borderColor}; */
    border: 1.5px solid #efdfdf;
    table {
        border-collapse: collapse;
    }
    .k-grid-header {
        font-weight: bold;
        tr {
            background-color: #efdfdf;
        }
    }
    /* .k-grid-content {
        overflow-y: auto;
    } */
    .k-grid-container {
        tr {
            background-color: ${({ theme }) => theme.backgroundColor};
            color: ${({ theme }) => theme.textColor};
            /* border-bottom: 1px solid #d2d0ce; */
        }
        tr.k-alt {
            background-color: ${({ theme }) => theme.backgroundColor};
        }
        tr.k-master-row:hover {
            background-color: #ffffff;
        }
        tr:hover {
            transform: scale(1);
            box-shadow: 0 8px 16px 0 rgb(0 0 0 / 10%);
        }
    }
`;
