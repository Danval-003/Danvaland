import React from 'react'
import { gameBoy, Bline, Starwars } from '@assets'
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
        <h3> SKILLS</h3>
        <p>&nbsp;-&gt; Javascript | LEVEL 60/100</p>
        <p>&nbsp;-&gt; React | LEVEL 50/100</p>
        <p>&nbsp;-&gt; Python | LEVEL 70/100</p>
        <p>&nbsp;-&gt; C++ | LEVEL 50/100</p>
        <p>&nbsp;-&gt; Java | LEVEL 70/100</p>
        <p>&nbsp;-&gt; Kotlin | LEVEL 60/100</p>
        <p>&nbsp;-&gt; Android | LEVEL 40/100</p>
        <p>&nbsp;-&gt; PostgreSQL | LEVEL 80/100</p>
        <p>&nbsp;-&gt; Ubuntu | LEVEL 30/100</p>
      </div>
    </div>
    <div className={proyectContainer}>
      <div className={BlineContainer}>
        <img src={Bline} alt='Bline' />
        <a href='https://github.com/Dahernandezsilve/Project_B-Line'>
          Bline Proyect
        </a>
      </div>
      <div className={starwarsContainer}>
        <a href='https://github.com/Danval-003/StarWarsProyect'>
          Star Wars Proyect
        </a>
        <img src={Starwars} alt='Bline' />
      </div>
      <div className={BlineContainer}>
        <img src={Bline} alt='Bline' />
        <a href='https://github.com/Dahernandezsilve/Project_B-Line'>
          Bline Proyect
        </a>
      </div>
    </div>
  </div>
)

export default Skills
