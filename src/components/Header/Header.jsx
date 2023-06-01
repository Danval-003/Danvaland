import React from 'react'
import { cloudI } from '@assets'
import {
  headerContainer,
  cloud,
  tiny,
  tinyRe,
  clouded,
  clouded2,
  cloud2,
} from './Header.module.css'
import NeonGlory from '../NeonGlory'

const Header = () => (
  <div className={headerContainer}>
    <h1>
      <NeonGlory text="Danval's  &nbsp;&nbsp;&nbsp;&nbsp;page" />
    </h1>
    <h2>
      <NeonGlory text='🢃' />
    </h2>
    <img src={cloudI} alt='cloud' className={cloud} />
    <img src={cloudI} alt='cloud' className={`${cloud} ${tiny}`} />
    <img src={cloudI} alt='cloud' className={`${cloud} ${tinyRe}`} />
    <img src={cloudI} alt='cloud' className={clouded} />
    <img src={cloudI} alt='cloud' className={`${clouded} ${tiny}`} />
    <img src={cloudI} alt='cloud' className={`${clouded} ${tinyRe}`} />
    <img src={cloudI} alt='cloud' className={cloud2} />
    <img src={cloudI} alt='cloud' className={`${cloud2} ${tiny}`} />
    <img src={cloudI} alt='cloud' className={`${cloud2} ${tinyRe}`} />
    <img src={cloudI} alt='cloud' className={clouded2} />
    <img src={cloudI} alt='cloud' className={`${clouded2} ${tiny}`} />
    <img src={cloudI} alt='cloud' className={`${clouded2} ${tinyRe}`} />
    <img src={cloudI} alt='cloud' className={`${clouded} ${tinyRe}`} />
  </div>
)

export default Header
