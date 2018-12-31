import React, { Component } from "react";
import "../styles/Home.scss";
import Projects from "./Projects";
import Work from "./Work";
import SplitText from "react-pose-text";

const ProjectsArray = require("../data/Projects.json").projects;
const WorksArray = require("../data/Works.json").works;


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            works: [],
            showTitle: false
        }
    }

    componentWillMount() {
        this.setState({
            projects: ProjectsArray,
            works: WorksArray
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showTitle: true
            })
        }, 1000)
    }


    homeSection = () => {

        const charPoses = {
            enter: {
                opacity: 1,
                x: '0%',
                beforeChildren: true,
                staggerChildren: 30,
                delay: ({ charIndex }) => charIndex * 50
            },
            exit: {
                opacity: 0,
                x: '-100%',
                delay: 300
            }
        };

        return (
            <div>
                <div className="container home">
                    {
                        this.state.showTitle ? <div className="intro">
                            <h1>
                                <SplitText charPoses={charPoses} initialPose={'exit'} pose={'enter'}>
                                    Hi, My name is Michael Chi
                        </SplitText>
                            </h1>
                            <h2>
                                <SplitText charPoses={charPoses} initialPose={'exit'} pose={'enter'}>
                                    I'm a full-stack software developer
                        </SplitText>
                            </h2>
                        </div> : null

                    }
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