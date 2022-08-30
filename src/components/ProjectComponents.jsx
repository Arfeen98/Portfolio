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
      description="This is a collaborative project wherein a user gets to enjoy the features of time management tools like, Project & Task Creation, Time Tracking, Event Marking & Scheduling. Some of the functionality which we have implemented are login/signup user account, CRUD operations for projects & tasks,track your time with our stopwatch
      mark events & schedules on the calendar(only for paid users)."
      arr={project4}
      github="https://github.com/J-Prajwal/clockifyClone-fixedThread"
      website="https://clockify-fixedthread.netlify.app/"
      />
      <Projects
      preview={Mamaearth}
        title="Mamaearth clone"
        description="In this project we have tried to manipulate dom elements, styling using css and tried to make website more dynamic and responsive.Some of the functionality we have added are sign-in/sign-up, home page, user authentication, payment page,  developed data using local storage."
        arr={project1}
        github="https://github.com/Arfeen98/MamaEarthclone"
        website="https://calm-sawine-27b8ed.netlify.app/"
      />
      <Projects
        preview={BathBody}
        title="Bath&Body Works clone (from react)"
        description="In this project we have tried to make a look alike clone of Bath&Body Works website some of the functionality we have added are home page, payment page, slider, navbar, sorting,sign-in/sign-up and created data using json-server and deployed it in Heroku."
        arr={project3}
        github="https://github.com/Arfeen98/rainy-scissors-3404"
        website="https://regal-stardust-d954b0.netlify.app"
        />
      <Projects
      preview={Fitmeal}
      title="Fitmeals Clone"
      description="In this project we have tried to make a look alike clone of Fitmeal website with the tech stack React,Redux,CSS. We have try to made all the pages with the functionality of slider, sorting, drop down, user-authentication, we have created the data using local storage."
      arr={project3}
      github="https://github.com/Arfeen98/FitMealsCLone"
      website="https://fit-meals.netlify.app/"
      />
      <Projects
      preview={IndianExpress}
      title="The Indian Express Clone"
      description="In this project I have tried to make a look alike clone of The Indian Express website with the tech stack React,Redux,CSS,Chakra UI.some of the functionality added are filter by country name,search,user-authentication,used News-Api."
      arr={project3}
      github="https://github.com/Arfeen98/The-Indian-Express-Clone"
      website="https://github.com/Arfeen98/The-Indian-Express-Clone#readme"
      />
      <Projects
      preview={BathBody}
        title="Bath&Body Works clone"
        description="In this project we have tried to make a look alike clone of Bath&Body Works website some of the functionality we have added are home page, payment page, slider, navbar, sorting, drop down,search by name inside the product pages, coupon functionality."
        arr={project2}
        github="https://github.com/Arfeen98/Bathanbodyworks-clone"
        website=" https://arfeen98.github.io/Bathanbodyworks-clone"
      />
    </div>
  );
}
