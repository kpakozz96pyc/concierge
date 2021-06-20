import React from 'react';
import './App.css';
import {RootConfig} from "./root/configure-root";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {LoginRouter} from "./routers/login-router";
import {PrivateRoute} from "./routers/private-route";
import {MainRouter} from "./routers/main-router";
import {Provider} from "react-redux";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const App: React.FC<RootConfig> = ({store}) => {

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Provider store={store}>
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route path="/login">
                        <LoginRouter/>
                    </Route>
                    <PrivateRoute>
                        <MainRouter/>
                    </PrivateRoute>
                </Switch>
            </BrowserRouter>
        </Provider>
        </MuiPickersUtilsProvider>
    );
};

export default App;
