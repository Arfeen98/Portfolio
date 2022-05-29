import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact" id="connect">
      <div className="number">
        <p>Contact Me</p>
        <p id="phone-number">+91 8910082650</p>
        <p>arfeenmushtaque1998@gmail.com</p>
        <div className="cont">
          <a target="_blank" rel='noreferrer' href="https://github.com/Arfeen98">
            <i style={{color:'black'}} className="fab fa-github"></i>
          </a>

          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/arfeen-mushtaque-7a5988225/">
            <i style={{color:'black'}} className="fab fa-linkedin"></i>
          </a>
          <a target="_blank" rel='noreferrer' href="https://twitter.com/ArfeenMushtaque">
            <i style={{color:'black'}} className="fab fa-twitter"></i>
          </a>
          {/* <a target="_blank" rel='noreferrer' href="https://link.medium.com/LONzgawkoqb">
            <i style={{color:'black',marginTop:'25px'}} className="fa-brands fa-medium fa-xl"></i>
          </a> */}
            {/* <i style={{color:'black',marginTop:'25px'}} className="fa-brands fa-medium fa-xl"></i> */}
        </div>
      </div>
      <div className="copyright">
      No © copyright issues | Designed and developed by Arfeen Mushtaque 
      </div>
    </div>
  );
}