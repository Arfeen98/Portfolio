import React from 'react'
import reacts from './static/react.png'
import redux from './static/redux.png'
import nodejs from './static/nodejs.png'
import express from './static/expressjs.png'
import mongo from './static/mongodb.png'
import javascript from './static/javascript.png'
import css from './static/css.png'
import github from './static/github.png'
import Chakra from './static/Chakra.png'
import html from './static/html.png'
import cli from './static/clibash.png'
import bootstrap from './static/bootstrap.png'
import typescript from './static/typescript.png'
import cypress from './static/cypress.png'
import jest from './static/jest.png'
import"./Skills.css"
import SkillComponents from './SkillComponents'

export default function Skills() {
    return (
        <div className='skills' id='SKILLS'>
            <p>Skills and Tools</p>
            <div className="tools">
           <SkillComponents name ="HTML" icon={html}/>
           <SkillComponents  name ="REACT" icon={reacts}/>
           <SkillComponents  name ="REDUX" icon={redux}/>
           <SkillComponents name ="Node.js" icon={nodejs}/>
           <SkillComponents name ="Express.js" icon={express}/>
           <SkillComponents name ="MongoDB" icon={mongo}/>
           <SkillComponents name ="JavaScript" icon={javascript}/>
           <SkillComponents name ="CSS" icon={css}/>
           <SkillComponents name ="GIT" icon={github}/>
           <SkillComponents name ="Chakra UI " icon={Chakra}/>
           <SkillComponents name ="CLI" icon={cli}/>
           <SkillComponents name ="Bootstrap" icon={bootstrap}/>
           <SkillComponents name ="TypeScript" icon={typescript}/>
           <SkillComponents name ="Cypress" icon={cypress}/>
           <SkillComponents name ="Jest" icon={jest}/>
            </div>
        </div>
    )
}
