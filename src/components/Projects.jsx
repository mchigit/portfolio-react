import React, { Component } from "react";
import PropTypes from 'prop-types';
import "../styles/Projects.scss";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from "react-router-dom"

class Projects extends Component {

    renderProjectLinks = (links) => {
        return links.map((link, key) => (
            <a href={link.url} key={key} rel="noopener noreferrer" target="_blank"><img className="project-link-icon" src={require(`../images/${link.img}`)} alt="link icons"></img></a>
        ));
    }

    // renderProjects = (projectsArray) => {
    //     const projectCards = projectsArray.map((project, key) => 
    //         <div className="project-card" key={key}>
    //             <div className="project-title">
    //                 <h2>{project.title}</h2>
    //             </div>
    //             <div className="project-tech">
    //                 <p>{project.tech}</p>
    //             </div>
    //             <div className="project-image">
    //                 <img src={require(`../images/${project.image}`)} alt={project.image_alt} />
    //             </div>
    //             <div className="project-detail">
    //                 <p>
    //                     {project.detail}
    //                 </p>
    //             </div>
    //             <div className="project-links">
    //                 {this.renderProjectLinks(project.links)}
    //             </div>
    //         </div>
    //     );

    //     return projectCards
    // }

    renderProjects = (projects) => {
        const projectsTimeline = projects.map((project, key) => (
            <VerticalTimelineElement key={key}
                className="vertical-timeline-element--work"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <h3 className="vertical-timeline-element-title">{project.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{project.tech}</h4>
                <div className="project-detail">
                    <div className="project-image">
                        <img src={require(`../images/${project.image}`)} alt={project.image_alt} />
                    </div>
                    <div className="project-explain">
                        <p>
                            {project.detail}
                        </p>
                        <div className="project-links">
                           {this.renderProjectLinks(project.links)}
                        </div>
                    </div>
                </div>
                
            </VerticalTimelineElement>
        ));

        return <VerticalTimeline className="work-timeline" layout="1-column">
            {projectsTimeline}
        </VerticalTimeline>
    }

    render() {
        return (
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