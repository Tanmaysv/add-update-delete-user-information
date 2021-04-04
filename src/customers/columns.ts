import ActionCellRenderer from "../shared/cell-renderer/action-cell-renderer";
import NameCellRenderer from "../shared/cell-renderer/name-cell-renderer";
import { GridComponentColumn } from "../shared/grid-component";

export const CustomersColumn = (
    onDeleteClick: (userId: string) => void
): GridComponentColumn[] => [
    {
        name: "Name",
        field: "first_name",
        cell: NameCellRenderer,
    },
    {
        name: "Username",
        field: "username",
    },
    {
        name: "Email",
        field: "email",
    },
    {
        name: "Phone",
        field: "phone",
    },
    {
        name: "Created Date",
        field: "createdDate",
    },
    {
        name: "Action",
        field: "action",
        cell: (props: any) => ActionCellRenderer(props, onDeleteClick),
    },
];
