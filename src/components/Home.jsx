import React, { Component } from "react";
import "../styles/Home.scss";
import Projects from "./Projects";
import Work from "./Work";
const ProjectsArray = require("../data/Projects.json").projects;
const WorksArray = require("../data/Works.json").works;


class Home extends Component {

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

    homeSection = () => {
        return (
            <div>
                <div className="container home">
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
                <div className="sections">
                <div className="section-wrapper" id="work">
                    <div className="section-title">
                        <h1>Work Experience</h1>
                    </div>
                    <Work works={this.state.works} />
                </div>
                <div className="section-wrapper" id="projects">
                    <div className="section-title">
                        <h1>Projects</h1>

                    </div>
                    <Projects projects={this.state.projects} />
                </div>
                </div>
            </div>
        );
    }
}

export default Home;