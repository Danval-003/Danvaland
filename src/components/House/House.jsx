import React from 'react'
import { pickaChu } from '@assets'
import {
  houseContainer,
  neoContainer,
  pickaContainer,
} from './House.module.css'
import NeonGlory from '../NeonGlory'

const House = () => (
  <div className={houseContainer}>
    <div className={neoContainer}>
      <NeonGlory text='Who &nbsp;&nbsp;am&nbsp;&nbsp;I?' />
    </div>
    <img src={pickaChu} alt='Pickachu baila' className={pickaContainer} />
    <p>
      Welcome to my page! I&apos;m a passionate computer science and information
      technology engineering student at the Universidad del Valle de Guatemala.
      With a strong affinity for video games, programming, and staying on top of
      the latest technologies, I&apos;m constantly exploring and expanding my
      knowledge in the vast world of computing.
    </p>
  </div>
)

export default House
