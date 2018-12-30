import React, { Component } from "react";
import "../styles/Home.scss";
import Projects from "./Projects";
import Work from "./Work";
const ProjectsArray = require("../data/Projects.json").projects;


class Home extends Component {

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

    homeSection = () => {
        return (
            <div>
                <div className="container">
                     <div className="intro">
                         <h1>Hi, My name is Michael Chi</h1>
                         <p>I'm a full-stack software developer</p>
                     </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.homeSection()}
            </div>
        );
    }
}

export default Home;