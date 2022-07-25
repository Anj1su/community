import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faFire } from "@fortawesome/fontawesome-free-solid";
import { faAngleLeft } from "@fortawesome/fontawesome-free-solid";

const SubHeader = () => {
    return (
        <div className="SubHeader">
            <Link to="/">
                <div className="goBackBtn">
                    <span className="arrow">
                        <FontAwesomeIcon icon={faAngleLeft} size="2x"/>
                    </span>
                    <span className="logo">
                        <FontAwesomeIcon icon={faFire} className="faFiree" size="sm"/>
                        MODOIT
                    </span>
                </div>
            </Link>
        </div>
    );
}

export default SubHeader;