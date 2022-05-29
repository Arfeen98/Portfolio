import React from 'react'
import img1 from './Coding.gif'

import"./MyDetails.css"

export default function MyDetails() {
    return (
        <div className='details' id="ABOUT">
            <p className='me'>About Me</p>
            <img src={img1} alt="" />
            <p className='mydetails'>
            An aspiring full stack web developer from Masai School. Self-motivated, logical, and curious with a keen interest in building user-friendly web based products using JavaScript, HTML, CSS, React, Redux, BootStrap, Chakra UI. Have a deep passion for coding and looking for a job oppurtunity in a technology-driven organization that would help to enhance my career and my technical knowledge and at the same time showcase my technical skills to the best of my ability. 
            </p>
        </div>
    )
}
