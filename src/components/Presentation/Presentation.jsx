import React, { useState, useRef, useEffect } from 'react'
import { backgroundPage, intro2 } from './Presentation.module.css'

const Presentation = () => {
  const [textoPricipal, setTextoPrincipal] = useState('')
  const [color, setColor] = useState('white')
  const [index, setIndex] = useState(0)
  const disorderInterval = useRef(null)
  const listText = [
    'Who am I?',
    'What skills do I possess?',
    'What have I already done?',
    'Welcome to...',
    'Danvaland',
  ]

  const listColor = [
    'rgb(141, 117, 11)',
    'rgb(11, 85, 141)',
    'rgb(11, 141, 48)',
    'rgb(0, 0, 0)',
    'rgb(141, 11, 33)',
  ]

  useEffect(() => {
    disorderInterval.current = setInterval(() => {
      setTextoPrincipal(listText[index])
      if (index >= listText.length - 1) {
        setColor(listColor[listColor.length - 1])
        clearInterval(disorderInterval.current)
      } else {
        setIndex(index + 1)
        setColor(listColor[index])
      }
    }, 2800)

    return () => {
      clearInterval(disorderInterval.current)
    }
  })

  return (
    <div
      className={`${backgroundPage} ${
        color === 'rgb(141, 11, 33)' ? intro2 : null
      }`}
      style={{ backgroundColor: `${color}` }}
    >
      <h1>{textoPricipal}</h1>
    </div>
  )
}

export default Presentation
