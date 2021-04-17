import { GridColumn as Column } from "@progress/kendo-react-grid";
import React from "react";
import { StyledGrid } from "./grid-styles";

export type GridComponentColumn = {
    name: string;
    field: string;
    width?: string;
    cell?: any;
};

type GridComponentProps = {
    columns: GridComponentColumn[];
    data: any[];
};

const GridComponent: React.FC<GridComponentProps> = ({
    columns,
    data,
}: GridComponentProps) => (
    <StyledGrid data={data}>
        {columns.map((column, index) => {
            return (
                <Column
                    key={index}
                    title={column.name}
                    field={column.field}
                    width={column?.width}
                    cell={column?.cell}
                />
            );
        })}
    </StyledGrid>
);

export default GridComponent;
