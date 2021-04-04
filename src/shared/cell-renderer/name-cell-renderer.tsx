const NameCellRenderer = (props: any) => {
    const { first_name, last_name = "" } = props.dataItem;

    return <td>{`${first_name} ${last_name}`}</td>;
};

export default NameCellRenderer;
