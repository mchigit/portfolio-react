import React, { Component } from "react";
import PropTypes from 'prop-types';
import "../styles/Projects.scss";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

class Projects extends Component {

    renderProjectLinks = (links) => {
        return links.map((link, key) => (
            <Button key={key} variant="outlined"
                color="default"
                className="project-buttons"
                target="_blank" href={link.url}>{link.text}</Button>
        ));
    }

    renderProjects = (projects) => {
        const projectsTimeline = projects.map((project, key) => (
            <VerticalTimelineElement key={key}
                className="vertical-timeline-element--work project-element"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
                <div className="project-element">
                    <div className="project-tech">
                        {project.tech.map((tech, key) => (
                            <Chip className="tech-chip" key={key} label={tech} />
                        ))}
                    </div>
                    <div className="project-detail">
                        <div className="project-image">
                            <img src={require(`../images/${project.image}`)} alt={project.image_alt} />
                        </div>
                        <div className="project-explain">
                            <div>
                                <h2>{project.title}</h2>
                                <p>
                                    {project.detail}
                                </p>
                            </div>
                            <div className="project-links">
                                {this.renderProjectLinks(project.links)}
                            </div>
                        </div>
                    </div>
                </div>
            </VerticalTimelineElement>
        ));

        return <VerticalTimeline layout="1-column">
            {projectsTimeline}
        </VerticalTimeline>
    }

    render() {
        return (
            <div className="container projects">
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