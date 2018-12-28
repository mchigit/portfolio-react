import React, { Component } from "react";
import PropTypes from 'prop-types';
import "../styles/Projects.scss";
import github from "../images/github-logo.svg";
import website from "../images/website.svg";

class Projects extends Component {

    renderProjectLinks = (links) => {
        let linkElements;
        const linksLength = Object.keys(links).length;
        if (linksLength === 0) return null;
        else if (linksLength === 2) {
            linkElements = 
                <div>
                    <a href={links.github} rel="noopener noreferrer" target="_blank"><img className="project-link-icon" src={github} alt="github"></img></a>
                    <a href={links.website} rel="noopener noreferrer" target="_blank"><img className="project-link-icon" src={website} alt="github"></img></a>
                </div>
            ;
        } else {
            if (links.github) {
                linkElements =  <a href={links.github} rel="noopener noreferrer" target="_blank"><img className="project-link-icon" src={github} alt="github"></img></a>
            } else {
                linkElements = <a href={links.website} rel="noopener noreferrer" target="_blank"><img className="project-link-icon" src={website} alt="github"></img></a>
            }
        }

        return linkElements;
    }

    renderProjects = (projectsArray) => {
        const projectCards = projectsArray.map((project, key) => 
            <div className="project-card" key={key}>
                <div className="project-title">
                    <h2>{project.title}</h2>
                </div>
                <div className="project-tech">
                    <p>{project.tech}</p>
                </div>
                <div className="project-image">
                    <img src={require(`../images/${project.image}`)} alt={project.image_alt} />
                </div>
                <div className="project-detail">
                    <p>
                        {project.detail}
                    </p>
                </div>
                <div className="project-links">
                    {this.renderProjectLinks(project.links)}
                </div>
            </div>
        );

        return projectCards
    }

    render() {
        return(
            <div className="container projects" id="projects">
                <div className="projects-wrapper">
                   {this.renderProjects(this.props.projects)}
                </div>
            </div>
        );
    }
}

export default Projects;

Projects.propTypes = {
    projects: PropTypes.array
}