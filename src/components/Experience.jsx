import React from 'react'
import img1 from './Coding.gif'

import"./MyDetails.css"

export default function Experience() {
    return (
        <div className='details1' id="EXPERIENCE">
            <p className='me'>Work Experience</p>
            <h4 className='mydetails1'>Klizo Solution Pvt. ltd.(Kolkata) — Jr. MERN Developer — December 2023 to present</h4>
            <ol className='mydetails1' > 
             <li style={{listStyleType:'initial',textAlign:'justify'}}>Orchestrated the development of <a href="https://chromewebstore.google.com/detail/compilerx-gpt-%E2%80%93-an-ai-pow/ompjagjmmkphcajnlbcmejmkoeajkiod" target='_blank' style={{color:'blue'}}>CompilerX-Gpt</a> extension which
is present in the Chrome web store using React in TypeScript,
alongside Redux for efficient state management, ensuring a
seamless user experience and robust functionality.</li>
<li style={{listStyleType:'initial',textAlign:'justify'}} >Solely led the frontend team for the <a href="https://payouts.ncentiva.com/" target='_blank' style={{color:'blue'}}>Ncentiva</a>  project,
spearheading the development of dynamic user interfaces using
React.js, while also actively collaborating with the backend team.
Additionally, contributed to the project by developing RESTful
APIs using Node.js and Express.js to facilitate seamless
communication between the frontend and backend systems.</li>
<li style={{listStyleType:'initial',textAlign:'justify'}}>Played a pivotal role in the development and upkeep of <a href="https://firm.pcma.klizos.com/" target="_blank" style={{color:'blue'}} rel="noopener noreferrer">PCMA's</a>
web platform, implementing scalable solutions to accommodate
evolving business needs and drive sustainable growth.</li>
<li style={{listStyleType:'initial',textAlign:'justify'}}>Engaged in multiple projects including <a href="https://ardroid.com/" target="_blank" style={{color:'blue'}} rel="noopener noreferrer">Ardroid</a>, <a href="https://dev.interviewscreener.com/login" style={{color:'blue'}} target="_blank" rel="noopener noreferrer">Interview
Screener</a>, and <a href="https://front-dev.ncentiva.com/" target="_blank" style={{color:'blue'}} rel="noopener noreferrer">GCIP</a>, showcasing versatility and adaptability
across various domains and technologies. Utilized React.js and
Redux extensively to ensure smooth collaboration and seamless
frontend development within the team, fostering efficient
communication and streamlined workflows.</li>
            </ol>
        </div>
    )
}
