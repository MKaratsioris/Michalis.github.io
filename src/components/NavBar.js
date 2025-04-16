import { useState } from "react";
import "./NavBar.scss";

import { FaBars, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { ImFacebook } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons/lib";

export const NavBar = () => {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <div className="social">
              <a
                href="https://bit.ly/3YFrFbz"
                className="navbar-logo"
                target="_blank"
                title="My Github"
                onClick={closeMobileMenu}
              >
                <TbBrandGithubFilled
                  size={20}
                  style={{ color: "--lime-theme", marginRight: "1rem" }}
                />
              </a>
              <a
                href="https://bit.ly/3jb2tu7"
                className="navbar-logo"
                target="_blank"
                title="My LinkedIn"
                onClick={closeMobileMenu}
              >
                <FaLinkedinIn
                  size={20}
                  style={{ color: "--lime-theme", marginRight: "1rem" }}
                />
              </a>
              <a
                href="https://bit.ly/4761UFR"
                className="navbar-logo"
                target="_blank"
                title="My Facebook"
                onClick={closeMobileMenu}
              >
                <ImFacebook
                  size={20}
                  style={{ color: "--lime-theme", marginRight: "1rem" }}
                />
              </a>
            </div>
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <FaTimes color="var(--main)" />
              ) : (
                <FaBars color="var(--main)" />
              )}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/skills"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Resume
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};
