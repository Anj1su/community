import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5,faCss3Alt,faJsSquare,faReact } from "@fortawesome/free-brands-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons"
import { faFire } from "@fortawesome/fontawesome-free-solid";

const SideMenu = ({ activeMenu }) => {
  return (
    <div className="SideMenu">
      <div className="logo">
        <Link to="/">
            <div className={activeMenu === "home" ? "on" : "off"}>
              <FontAwesomeIcon icon={faFire} className="faFiree" size="sm"/>
              MODOIT
            </div>
        </Link>
      </div>

      <div className="SideMenu-list">
        <Link to="/html">
          <button className={activeMenu === "html" ? "on" : "off"}>
              <FontAwesomeIcon icon={faHtml5} className="fontawesome" size="lg"/>
              　　HTML
          </button>
        </Link>
        <Link to="/css">
          <button className={activeMenu === "css" ? "on" : "off"}>
            <FontAwesomeIcon icon={faCss3Alt} className="fontawesome" size="lg"/>
            　　CSS
          </button>
        </Link>
        <Link to="/java">
          <button className={activeMenu === "java" ? "on" : "off"}>
              <FontAwesomeIcon icon={faJsSquare} className="fontawesome" size="lg"/>
              　　JAVA
          </button>
        </Link>
        <Link to="/react">
          <button className={activeMenu === "react" ? "on" : "off"}>
              <FontAwesomeIcon icon={faReact} className="fontawesome" size="lg"/>
              　　REACT
          </button>
        </Link>
        <Link to="/etc">
          <button className={activeMenu === "etc" ? "on" : "off"}>
              <FontAwesomeIcon icon={faCircleDot} className="fontawesome" size="lg"/>
              　　ETC
          </button>
        </Link>
        <Link to="/search">
          <button className={activeMenu === "search" ? "on" : "off"}>SEARCH</button>
        </Link>
      </div>
      <div className="copyright">Copyright 2022 Anjisu © All Rights Reserved.</div>
    </div>
    
  );
};

export default SideMenu;
