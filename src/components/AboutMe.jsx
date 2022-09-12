import React from "react";
import "./AboutMe.css";
import img from "./Myself.jpg";
import tree from "./skill-logo/fogtree.jpg";

export default function AboutMe() {
  return (
    <div className="about">
      <div className="fog">
        <img src={tree} alt="" />
      </div>
      <div className="info">
        <p>Hey there!</p>
        <p>I am Arfeen Mushtaque</p>
        <p>Full-Stack Web Developer</p>
         <a href="#connect"><button> Connect </button></a>
      </div>

      <div className="image">
        <div className="white">
          <img src={img} alt="Arfeen Mushtaque" />
        </div>
      </div>
    </div>
  );
}
