import React from "react";
import Typewriter from "typewriter-effect";

import "./MainPage.css";
import flash from "../images/flash.png";

const MainPage = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can you type</h1>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ["Fast?", "Correct?", "Quick?"],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="landing-right">
                <img
                    data-aos="fade-left"
                    className="flash-image"
                    src={flash}
                    alt="flash"
                />
            </div>
        </div>
    );
};

export default MainPage;