import { FormType } from "../../shared/type";
import { CustomerType } from "../redux/state";
import moment from "moment";

export const getUpdatedCustomerList = (
    customerList: CustomerType[],
    newCustomer: FormType,
    id: string,
    isEditing: boolean
): CustomerType[] => {
    const { name, email, username, phone } = newCustomer;
    const [firstName, lastName] = name.split(" ");
    const newCustomerObj = {
        id: Number(id),
        first_name: firstName,
        last_name: lastName,
        email: email,
        username: username,
        phone: phone,
        createdDate: moment(new Date()).format("YYYY-MM-DD"),
    };
    const list = !isEditing
        ? [...customerList, newCustomerObj]
        : [
              ...customerList.filter((cust) => cust.id !== Number(id)),
              newCustomerObj,
          ];
    list.sort((a, b) => (a.id > b.id ? 1 : -1));
    return list;
};
