import React from 'react'
import img1 from './Coding.gif'

import"./MyDetails.css"

export default function MyDetails() {
    return (
        <div className='details' id="ABOUT">
            <p className='me'>About Me</p>
            <img src={img1} alt="" />
            <p className='mydetails'>
            An aspiring full-stack web developer from Masai School specializing
in MERN Stack. Self-motivated, logical, curious, observant,
multitasking, problem-solving, team player with the technical skills
to write web-based products using JavaScript, CSS, and MERN.
Having a deep passion for coding and looking for a job opportunity
in a technology-driven organization that would help enhance my
career and technical knowledge while simultaneously showcasing
my technical skills to the best of my ability.
            </p>
        </div>
    )
}
