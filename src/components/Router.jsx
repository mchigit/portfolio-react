import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Navmenu from "./Navmenu";
const ProjectsArray = require("../data/Projects.json").projects;

class AppRouter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.setState({
            projects: ProjectsArray
        })
    }

    render() {
        return(
            <Router>
                <div>
                    <Navmenu />
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/projects" render={(props) => <Projects {...props} projects={this.state.projects} />}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default AppRouter;