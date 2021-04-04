import React from "react";
import {
    BrowserRouter,
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Customers from "../customers";
import AddCustomer from "../customers/add-customer";
import EditCustomer from "../customers/edit-customer";

const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Customers} />
            <Route path="/edit-user/:user_id" component={EditCustomer} />
            <Route path="/add-user" component={AddCustomer} />
        </BrowserRouter>
    );
};

export default AppRouter;
