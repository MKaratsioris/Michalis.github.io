import "./Skills.scss";
import { PageHeaderContent } from "../components/AllComponents";
import { skillsData } from "../utils/skillsUtils";
import { useTitle } from "../hooks/useTitle";

import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import { GiSkills } from "react-icons/gi";

export const Skills = () => {
  useTitle("- Skills");
  return (
    <section id="skills" className="skills">
      <PageHeaderContent title="My Skills" icon={<GiSkills size={40} />} />
      <div className="skills-content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills-content-wrapper-inner-content">
            <Animate
              play
              duration={0.5}
              delay={0.1}
              start={{ transform: "translateX(-1000px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="skills-content-wrapper-inner-content-text">
                {item.label}
              </h3>
              <div className="skills-content-wrapper-inner-content-progress-bar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={0.5}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div key={j} className="progress-bar-wrapper">
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="5"
                        strokeColor="var(--main)"
                        trailWidth={"5"}
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};
