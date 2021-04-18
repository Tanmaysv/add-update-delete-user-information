import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: underline !important;
    margin-right: 0.5rem;
    &:hover {
        color: ${({ theme }) => theme.linkColor};
    }
`;

const ActionCellRenderer = (
    props: any,
    onDeleteClick: (userId: string) => void
) => (
    <td>
        <StyledLink to={"/edit-user/" + props.dataItem.id}>Edit</StyledLink>
        <StyledLink to={"/"} onClick={() => onDeleteClick(props.dataItem.id)}>
            Delete
        </StyledLink>
    </td>
);

export default ActionCellRenderer;
