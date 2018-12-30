import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../styles/Work.scss";

class Work extends Component {

    renderWorkExperience = (works) => {
        const workTimeline = works.map((work, key) => (
            <VerticalTimelineElement key={key}
             className="vertical-timeline-element--work"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              >
                <h3 className="vertical-timeline-element-title">{work.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{work.company}</h4>
                <h4>{work.date}</h4>
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
                    <VerticalTimeline  className="work-timeline">
                       {this.renderWorkExperience(this.props.works)}
                    </VerticalTimeline>
                </div>
            </div>
        );
    }
}

export default Work;
