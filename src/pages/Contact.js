import "./Contact.scss";
import { PageHeaderContent } from "../components/AllComponents";
import { useTitle } from "../hooks/useTitle";

import { IoIosContacts } from "react-icons/io";
import { Animate } from "react-simple-animate";

export const Contact = () => {
  useTitle("- Contact");
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        title="My Contact"
        icon={<IoIosContacts size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Get in touch</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <input
                  required
                  name="message"
                  className="inputMessage"
                  type={"text"}
                />
                <label htmlFor="message" className="messageLabel">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  className="inputMessage"
                  type={"text"}
                  rows="10"
                />
              </div>
            </div>
            <button>Submit</button>
          </div>
        </Animate>
      </div>
    </section>
  );
};
