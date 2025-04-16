import "./About.scss";
import { PageHeaderContent } from "../components/AllComponents";
import { useTitle } from "../hooks/useTitle";

import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import { FaDev, FaDatabase, FaPython, FaJava } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Michalis Karatsioris",
  },
  {
    label: "Address",
    value: "Milevska 34, Prague, Czech Republic",
  },
  {
    label: "email",
    value: "mkaratsioris@yahoo.com",
  },
  {
    label: "phone",
    value: "+420 773 457 851",
  },
];

const meSummary =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem ad quidem, temporibus eaque, magnam dolor ex molestias ipsum aspernatur molestiae vitae voluptatum facilis. Delectus quae corrupti officiis amet exercitationem nostrum! Quisquam iure ex, veritatis perspiciatis vel unde quod eveniet impedit molestias officia nihil quam expedita magni, reprehenderit praesentium, quas ea neque voluptas. Unde modi ullam, iure qui nobis atque et delectus sit facere nemo rem quis ratione, quasi blanditiis sint officiis consequatur, quia reprehenderit beatae numquam deleniti. Iste a omnis suscipit, tenetur quia rem cupiditate laudantium voluptatem, quos recusandae eum accusantium reprehenderit mollitia sint autem ea asperiores ex veritatis ipsa adipisci ad laborum tempore ipsum. Quasi eligendi quam excepturi cumque culpa ullam atque. Dicta minus ducimus tenetur pariatur amet, similique ab a voluptas consequuntur deleniti harum veritatis reiciendis repellat porro architecto consequatur. Ut repellat libero culpa voluptates in delectus odit explicabo corporis quisquam aliquid quasi, accusantium maxime expedita laboriosam? Dignissimos similique dolorem dolorum natus nobis quibusdam facere harum perspiciatis consequatur voluptatem commodi in unde quam nam, sapiente amet quaerat non vero excepturi. Cum placeat reprehenderit, iure accusantium id atque. Quaerat recusandae officia tempora perferendis expedita impedit ut laborum aliquam corporis, numquam, labore quos.";

export const About = () => {
  useTitle("- About");
  return (
    <section id="about" className="about">
      <PageHeaderContent
        title="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about-content">
        <div className="about-content-personalWrapper">
          <Animate
            play
            duration={0.5}
            delay={0.1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <p>{meSummary}</p>
          </Animate>

          <Animate
            play
            duration={0.5}
            delay={0.1}
            start={{ transform: "translateY(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personal-information-header-text">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((detail, index) => (
                <li key={index}>
                  <span className="value">{detail.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about-content-servicesWrapper">
          <Animate
            play
            duration={0.5}
            delay={0.1}
            start={{ transform: "translateX(1000px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about-content-servicesWrapper-innerContent">
              <div>
                <FaDev size={60} color="var(--main)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(--main)" />
              </div>
              <div>
                <FaPython size={60} color="var(--main)" />
              </div>
              <div>
                <FaJava size={60} color="var(--main)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
