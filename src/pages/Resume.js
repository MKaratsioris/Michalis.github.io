import "./Resume.scss";
import { PageHeaderContent } from "../components/AllComponents";
import { resumeData as data } from "../utils/resumeUtils";
import { useTitle } from "../hooks/useTitle";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { SiBookstack } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";

export const Resume = () => {
  useTitle("- Resume");
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        title="My Resume"
        icon={<IoNewspaperOutline size={40} />}
      />
      <div className="timeline">
        <div className="timeline-experience">
          <h3 className="timeline-experience-header-text">Experience</h3>
          <VerticalTimeline layout={"1-column"} lineColor="var(--main)">
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline-experience-vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--sub-text-color)",
                  border: "1.5px solid var(--main)",
                }}
                date={item.period}
                icon={<MdWork />}
                iconStyle={{
                  background: "var(--nav-background-color)",
                  color: "var(--main)",
                }}
              >
                <h3 className="title">{item.title}</h3>
                <h5 className="subtitle">{item.subTitle}</h5>
                <p className="description">{item.description}</p>
                <p className="city">{item.city}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline-education">
          <h3 className="timeline-education-header-text">Education</h3>
          <VerticalTimeline layout={"1-column"} lineColor="var(--main)">
            {data.education.map((item, j) => (
              <VerticalTimelineElement
                key={j}
                className="timeline-education-vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--sub-text-color)",
                  border: "1.5px solid var(--main)",
                }}
                date={item.period}
                icon={<SiBookstack />}
                iconStyle={{
                  background: "var(--nav-background-color)",
                  color: "var(--main)",
                }}
              >
                <h3 className="title">{item.title}</h3>
                <h5 className="subtitle">{item.subTitle}</h5>
                <p className="description">{item.description}</p>
                <p className="city">{item.city}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
