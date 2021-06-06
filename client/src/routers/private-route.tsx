import { RouteProps, Route } from "react-router-dom";
import React from "react";

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
    return <Route {...rest} render={({ }) =>
        children
    }>
    </Route>;
};