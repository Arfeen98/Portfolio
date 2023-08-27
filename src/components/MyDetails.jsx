import React from 'react'
import img1 from './Coding.gif'

import"./MyDetails.css"

export default function MyDetails() {
    return (
        <div className='details' id="ABOUT">
            <p className='me'>About Me</p>
            <img src={img1} alt="" />
            <p className='mydetails'>
            Passionate front-end developer with a proven track record of experience in building engaging and efficient web applications using React.js. Eager to bring my strong technical acumen, creativity, and dedication to crafting seamless user experiences to a forward-looking development team. Seeking an environment that fosters innovation and offers opportunities for continuous learning and growth.
            </p>
        </div>
    )
}
