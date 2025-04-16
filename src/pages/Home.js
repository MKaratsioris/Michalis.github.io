import "./Home.scss";

import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { Fields } from "../components/AllComponents";

export const Home = () => {
  const navigate = useNavigate();
  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="home">
      <div className="home-text-wrapper">
        <h1 id="michalis">Hello, I'm Michalis</h1>
        <br />
        <Fields />
      </div>
      <Animate
        play
        duration={1.5}
        delay={0.5}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="home-contact-me">
          <button onClick={handleNavigateToContact}>Contact Me</button>
        </div>
      </Animate>
    </section>
  );
};
