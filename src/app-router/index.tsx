import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Customers from "../customers";
import AddCustomer from "../customers/add-customer";
import EditCustomer from "../customers/edit-customer";

type Props = {
    onToggleButtonClick: () => void;
};

const AppRouter: React.FC<Props> = ({ onToggleButtonClick }: Props) => {
    return (
        <BrowserRouter>
            <Route
                path="/"
                exact
                component={() => (
                    <Customers onToggleButtonClick={onToggleButtonClick} />
                )}
            />
            <Route path="/edit-user/:user_id" component={EditCustomer} />
            <Route path="/add-user" component={AddCustomer} />
        </BrowserRouter>
    );
};

export default AppRouter;
