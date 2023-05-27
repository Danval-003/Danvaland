import React, { useState, useRef, useEffect } from 'react'
import { Presentation, Header } from '@components'
import {
  backgroundPage,
  transitionFirstPage,
  backgroundPageContainer,
} from './StartPage.module.css'

const StartPage = () => {
  const [intro, setIntro] = useState(true)
  const [intro2, setIntro2] = useState(false)
  const timer = useRef(null)
  const timer2 = useRef(null)

  useEffect(() => {
    timer.current = setTimeout(() => setIntro(false), 16000)
    timer2.current = setTimeout(() => setIntro2(true), 15500)
    return () => clearTimeout(timer.current)
  }, [])

  return (
    <div className={backgroundPage}>
      <div className={`${intro2 ? transitionFirstPage : ''}`}>
        {intro ? <Presentation /> : null}
      </div>
      <div className={backgroundPageContainer}>
        <Header />
      </div>
    </div>
  )
}

export default StartPage
