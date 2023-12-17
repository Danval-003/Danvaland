import { React, useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import './BingoGamePage.scss'
import { BingoArrow } from '@assets'
import { useParams } from 'react-router-dom'
import { BingoWheel } from '@components'
import { ShowGame, GameMaster } from './Sub_Pages'

const BingoGamePage = () => {
  const { hash } = useParams()
  const [selectionOption, setSelectionOption] = useState(false)

  const toggleFullscreen = () => {
    const elementede = document.documentElement

    if (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    ) {
      // Si ya está en pantalla completa, salir de ella
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    } else {
      // Si no está en pantalla completa, activarla
      if (elementede.requestFullscreen) {
        elementede.requestFullscreen()
      } else if (elementede.webkitRequestFullscreen) {
        elementede.webkitRequestFullscreen()
      } else if (elementede.mozRequestFullScreen) {
        elementede.mozRequestFullScreen()
      } else if (elementede.msRequestFullscreen) {
        elementede.msRequestFullscreen()
      }
    }
  }

  return (
    <div className='total_container'>
      {!selectionOption ? <ShowGame id={hash} /> : <GameMaster id={hash} />}
      <div className='selectioner_container'>
        <button
          onClick={() => setSelectionOption(true)}
          type='button'
          className={selectionOption ? 'selected' : ''}
        >
          Presentation Mode
        </button>
        <button
          onClick={() => setSelectionOption(false)}
          type='button'
          className={!selectionOption ? 'selected' : ''}
        >
          Game Mode
        </button>
      </div>
      <button onClick={toggleFullscreen} type='button' className='full_screen'>
        Pantalla completa
      </button>
    </div>
  )
}

export default BingoGamePage
