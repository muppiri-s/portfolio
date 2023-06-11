import { ReactComponent as WorkIcon } from "../images/work.svg";
import { ReactComponent as SchoolIcon } from "../images/school.svg";

import timelineElements from "./timeLineElements";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import '../styles/education.css';
import Quote from "./quote";

const Education = () => {
    let workIconStyles = { background: "#549bdd" };
    let schoolIconStyles = { background: "#845d91" };

    return (
        <>
            <div className="education-container">
                <div className="edu-heading">
                    <h2>My Journey</h2>
                    <p>2016 to 2023 my life shit</p>
                </div>
                <div className="timeline">
                <VerticalTimeline>
                    {timelineElements.map((element) => {
                        let isWorkIcon = element.icon === "work";
                        let showButton =
                            element.buttonText !== undefined &&
                            element.buttonText !== null &&
                            element.buttonText !== "";

                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p id="description">{element.description}</p>
                                {showButton && (
                                    <a
                                        className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                                            }`}
                                        href="/"
                                    >
                                        {element.buttonText}
                                    </a>
                                )}
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
                </div>
            </div>
            <Quote />
        </>
    );
}

export default Education;
