import { React, useState, useEffect } from 'react'
import { BingoWheel } from '@components'
import supabase from '@services'

import './GameMaster.scss'
import Proptypes, { element } from 'prop-types'

const GameMaster = ({ id }) => {
  const [bingoBalls] = useState(() => {
    const bBalls = []
    for (let i = 1; i <= 75; i += 1) {
      bBalls.push(i)
    }
    return bBalls
  })
  const [count, setCount] = useState(0)
  const [realtime, setRealtime] = useState(null)
  const [numbers, setNumbers] = useState([])
  const [ranNum, setRanNum] = useState(0)
  const [chosenNumbers, setChosenNumbers] = useState([])
  const [isAnimating, setIsAnimating] = useState(false)
  const getNumbers = async () => {
    try {
      const { data, error } = await supabase
        .from('BingoPlays')
        .select('NumbersPlayed')
        .eq('id', id)
      if (error) {
        throw error
      }
      console.log(data[0].NumbersPlayed)
      console.log(bingoBalls)
      const importantData = data[0].NumbersPlayed
      setChosenNumbers(importantData)
      setNumbers(
        bingoBalls.filter(elementB => !importantData.includes(elementB)),
      )
    } catch (error) {
      console.error('Error al obtener datos de Supabase:', error.message)
    }
  }

  const setNumbersB = async () => {
    console.log(1)
    try {
      const { error } = await supabase
        .from('BingoPlays')
        .update({
          NumbersPlayed: chosenNumbers,
        })
        .eq('id', id)
        .select()
      if (error) {
        throw error
      }
    } catch (error) {
      console.error('Error al obtener datos de Supabase:', error.message)
    }
  }

  useEffect(() => {
    getNumbers()
  }, [])

  useEffect(() => {
    console.log('Numbers', numbers)
  }, [numbers])

  useEffect(() => {
    console.log(0)
    if (chosenNumbers.length !== 0) {
      setNumbersB()
    }
  }, [chosenNumbers])

  const randomElement = () => {
    const randomNumber = Math.floor(Math.random() * numbers.length)
    const temNumbers = numbers
    const randomEl = temNumbers.splice(randomNumber, 1)[0]
    setRanNum(randomEl)
    setNumbers(temNumbers)
    setChosenNumbers(prev => [...prev, randomEl])
  }

  const startAnimation = () => {
    setIsAnimating(true)

    // Intervalo de tiempo para cambiar el número durante la animación
    const animationInterval = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * numbers.length)
      const randomEl = numbers[randomNumber]
      setRanNum(randomEl)
    }, 100) // Ajusta la duración de la animación (en milisegundos)

    // Detener la animación después de un tiempo (por ejemplo, 2 segundos)
    setTimeout(() => {
      clearInterval(animationInterval)
      setIsAnimating(false)
      randomElement()
    }, 2000) // Ajusta el tiempo de duración total de la animación (en milisegundos)
  }

  return (
    <div className='principal_container_game'>
      <div className='game_wheel'>
        <div className='bingo_wheel_container'>
          <BingoWheel />
        </div>
        <div className={`bingo_ball ${ranNum === 0 ? 'exclude' : ''}`}>
          {ranNum}
        </div>
        <button
          onClick={() => startAnimation()}
          type='button'
          className='random_button'
        >
          Sacar una pelota
        </button>
      </div>
      <div className='game_info'>
        <div className='game_card'>
          <table>
            <thead>
              <tr>
                <th>
                  <p>B</p>
                </th>
                <th>
                  <p>I</p>
                </th>
                <th>
                  <p>N</p>
                </th>
                <th>
                  <p>G</p>
                </th>
                <th>
                  <p>O</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {bingoBalls.map(elementB =>
                    elementB <= 15 ? (
                      <div
                        className={!numbers.includes(elementB) ? 'exclude' : ''}
                      >
                        {elementB}
                      </div>
                    ) : null,
                  )}
                </td>
                <td>
                  {bingoBalls.map(elementB =>
                    elementB > 15 && elementB <= 30 ? (
                      <div
                        className={!numbers.includes(elementB) ? 'exclude' : ''}
                      >
                        {elementB}
                      </div>
                    ) : null,
                  )}
                </td>
                <td>
                  {bingoBalls.map(elementB =>
                    elementB > 30 && elementB <= 45 ? (
                      <div
                        className={!numbers.includes(elementB) ? 'exclude' : ''}
                      >
                        {elementB}
                      </div>
                    ) : null,
                  )}
                </td>
                <td>
                  {bingoBalls.map(elementB =>
                    elementB > 45 && elementB <= 60 ? (
                      <div
                        className={!numbers.includes(elementB) ? 'exclude' : ''}
                      >
                        {elementB}
                      </div>
                    ) : null,
                  )}
                </td>
                <td>
                  {bingoBalls.map(elementB =>
                    elementB > 60 && elementB <= 75 ? (
                      <div
                        className={!numbers.includes(elementB) ? 'exclude' : ''}
                      >
                        {elementB}
                      </div>
                    ) : null,
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

GameMaster.propTypes = {
  id: Proptypes.string.isRequired,
}

export default GameMaster
