import React from 'react'
import { gameBoy, Bline, Starwars, ALFAbetizate, maze, github } from '@assets'
import {
  skillsContainer,
  gameBoyContainer,
  textContainer,
  proyectContainer,
  BlineContainer,
  starwarsContainer,
} from './Skills.module.css'

const Skills = () => (
  <div className={skillsContainer}>
    <div className={gameBoyContainer}>
      <img src={gameBoy} alt='GameBoy' />
      <div className={textContainer}>
        <h3> MY SKILLS</h3>
        <p>&nbsp;-&gt; Javascript - LEVEL 60/100</p>
        <p>&nbsp;-&gt; React - LEVEL 50/100</p>
        <p>&nbsp;-&gt; Python - LEVEL 70/100</p>
        <p>&nbsp;-&gt; C++ - LEVEL 50/100</p>
        <p>&nbsp;-&gt; Java - LEVEL 70/100</p>
        <p>&nbsp;-&gt; Kotlin - LEVEL 60/100</p>
        <p>&nbsp;-&gt; Android - LEVEL 40/100</p>
        <p>&nbsp;-&gt; PostgreSQL - LEVEL 80/100</p>
        <p>&nbsp;-&gt; Ubuntu - LEVEL 30/100</p>
        <p>&nbsp;-&gt; CSS - LEVEL 60/100</p>
      </div>
    </div>
    <div className={proyectContainer}>
      <div className={BlineContainer}>
        <img src={Bline} alt='Bline' />
        <a href='https://github.com/Dahernandezsilve/Project_B-Line'>
          Bline Project
        </a>
      </div>
      <div className={starwarsContainer}>
        <a href='https://github.com/Danval-003/StarWarsProyect'>
          Star Wars Project
        </a>
        <img src={Starwars} alt='Bline' />
      </div>
      <div className={BlineContainer}>
        <img src={ALFAbetizate} alt='Bline' />
        <a href='https://github.com/Danval-003/ALFAbetizate/'>ALFAbetizate</a>
      </div>
      <div className={starwarsContainer}>
        <a href='https://stellar-sundae-246d9f.netlify.app/'>
          The uvg super maze
        </a>
        <img src={maze} alt='The Maze' />
      </div>
      <div className={BlineContainer}>
        <img src={github} alt='Bline' />
        <a href='https://github.com/Danval-003'>
          See more in my GitHub profile.
        </a>
      </div>
    </div>
  </div>
)

export default Skills
