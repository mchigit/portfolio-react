import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Navmenu from "./Navmenu";
import Work from "./Work";
const ProjectsArray = require("../data/Projects.json").projects;
const WorksArray = require("../data/Works.json").works;

class AppRouter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            works: []
        }
    }

    componentWillMount() {
        this.setState({
            projects: ProjectsArray,
            works: WorksArray
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
                        <Route path="/work" render={(props) => <Work {...props} works={this.state.works} />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default AppRouter;