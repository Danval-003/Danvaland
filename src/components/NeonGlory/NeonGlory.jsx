import React from 'react'
import PropTypes from 'prop-types'
import { textFlickerInGlow } from './NeonGlory.module.css'

const NeonGlory = ({ text }) => {
  const flickerLetter = letter => (
    <span
      style={{
        animation: `${textFlickerInGlow} ${Math.random() * 4}s linear both`,
      }}
    >
      {letter}
    </span>
  )

  const colorLetter = letter => (
    <span style={{ color: `hsla(${Math.random() * 360}, 100%, 80%, 1)` }}>
      {letter}
    </span>
  )

  const flickerAndColorText = texted =>
    texted.split('').map(flickerLetter).map(colorLetter)

  return <>{flickerAndColorText(text)}</>
}

NeonGlory.propTypes = {
  text: PropTypes.string.isRequired,
}

export default NeonGlory
