import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../styles/Work.scss";
import WorkIcon from '@material-ui/icons/Work';

class Work extends Component {

    icon = () => {
        return <i class="material-icons">
            work
        </i>
    }

    renderWorkExperience = (works) => {
        const workTimeline = works.map((work, key) => (
            <VerticalTimelineElement key={key}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <div className="work-summary">
                    <div className="work-titles">
                        <h3 className="vertical-timeline-element-title">{work.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{work.company}</h4>
                        <h4 className="vertical-timeline-element-subtitle">{work.date}</h4>
                    </div>
                    <div className="work-logo">
                        <img src={require(`../images/${work.logo}`)} alt="company-logo" />
                    </div>
                </div>
                <p>
                    {work.description}
                </p>
            </VerticalTimelineElement>
        ));

        return workTimeline
    }

    render() {
        return (
            <div className="container work">
                <div className="work-wrapper">
                    <VerticalTimeline>
                        {this.renderWorkExperience(this.props.works)}
                    </VerticalTimeline>
                </div>
            </div>
        );
    }
}

export default Work;
