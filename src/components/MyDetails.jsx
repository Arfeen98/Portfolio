import React from 'react'
import img1 from './Coding.gif'

import"./MyDetails.css"

export default function MyDetails() {
    return (
        <div className='details' id="ABOUT">
            <p className='me'>About Me</p>
            <img src={img1} alt="" />
            <p className='mydetails'>
            An aspiring full-stack web developer from Masai School having specialization in frontend. Self-motivated, logical, curious, observant, multitasking, problem-solving, team player that has the technical skills to write web-based products using JavaScript, HTML, CSS, React, Redux, Bootstrap, and CHAKRA UI. Have a deep passion for coding and looking for a job opportunity in a technology-driven organization that would help to enhance my career and my technical knowledge and at the same time showcase my technical skills to the best of my ability.
            </p>
        </div>
    )
}
