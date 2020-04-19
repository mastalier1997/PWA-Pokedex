import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Detail from "./Detail/Detail";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Detail" component={Detail} />

                </Switch>
            </Router>
        )
    }
}
