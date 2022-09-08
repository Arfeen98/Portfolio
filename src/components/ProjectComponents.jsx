import React from "react";
import Projects from "./Projects.jsx";
import "./ProjectComponents.css";
import Mamaearth from "./Projects-pic/Mamaearth.png";
import BathBody from "./Projects-pic/BathBody.png";
import Fitmeal from "./Projects-pic/Fitmeal.png";
import IndianExpress from "./Projects-pic/IndianExpress.png";
import Clockify from "./Projects-pic/Clockify.png";

export default function ProjectComponents() {
const project1 = ["fab fa-html5","fab fa-css3-alt","fab fa-js"]
const project2 = ["fab fa-html5","fab fa-css3-alt","fab fa-js"]
const project3 = ["fab fa-html5","fab fa-css3-alt","fab fa-js","fab fa-react"]
const project4 = ["fab fa-js","fab fa-react","fab fa-node"]

  return (
    <div className="all-projects" id="recent-work">
      <p>Projects</p>
      <Projects
      preview={Clockify}
      title="Clockify Clone"
      description="Clockify is the most popular free time tracker and timesheet app for teams of all sizes. Unlike all the other time trackers, Clockify lets you have an unlimited number of users for free. Clockify is an online app that works in a browser, but you can also install it on your computer or phone for convenience."
      arr={project4}
      github="https://github.com/J-Prajwal/clockifyClone-fixedThread"
      website="https://clockify-fixedthread.netlify.app/"
      />
      <Projects
      preview={Mamaearth}
        title="Mamaearth clone"
        description="Mamaearth is one of the most trustworthy brands in India. It offers the best-in-class skincare products to help you discover the essence of beauty with the Goodness of Nature."
        arr={project1}
        github="https://github.com/Arfeen98/MamaEarthclone"
        website="https://calm-sawine-27b8ed.netlify.app/"
      />
      <Projects
        preview={BathBody}
        title="Bath&Body Works clone (from react)"
        description="Bath & Body Works, LLC. is an American web application that caters premium soaps, lotions, fragrances, and candles."
        arr={project3}
        github="https://github.com/Arfeen98/rainy-scissors-3404"
        website="https://regal-stardust-d954b0.netlify.app"
        />
      <Projects
      preview={Fitmeal}
      title="Fitmeals Clone"
      description="Fitmeal is a web application which is on a mission to bring awareness about the importance of eating well and to improve your relationship with food. The relationship between food and the human body is so intense yet ignored by everybody that often results in neglected health and ultimately health related problems. Fitmeals aim is to ensure that everybody has access to nutrient dense,convenient meals so that you don’t have to compromise on your nutrition because of your busy schedules."
      arr={project3}
      github="https://github.com/Arfeen98/FitMealsCLone"
      website="https://fit-meals.netlify.app/"
      />
      <Projects
      preview={IndianExpress}
      title="The Indian Express Clone"
      description="Indian Express Limited is an Indian news media publishing company. It publishes several widely circulated dailies, including The Indian Express and The Financial Express in English, the Loksatta in Marathi and the Jansatta in Hindi."
      arr={project3}
      github="https://github.com/Arfeen98/The-Indian-Express-Clone"
      website="https://github.com/Arfeen98/The-Indian-Express-Clone#readme"
      />
      <Projects
      preview={BathBody}
        title="Bath&Body Works clone"
        description="Bath & Body Works, LLC. is an American web application that caters premium soaps, lotions, fragrances, and candles."
        arr={project2}
        github="https://github.com/Arfeen98/Bathanbodyworks-clone"
        website=" https://arfeen98.github.io/Bathanbodyworks-clone"
      />
    </div>
  );
}
