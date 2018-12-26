import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Home from "./Home";

class AppRouter extends React.Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route path="/" exact ></Route>
                </Switch>
            </Router>
        );
    }
}

export default AppRouter;