import { React, useState, useEffect } from 'react'
import './ShowGame.scss'
import supabase from '@services'
import Proptypes from 'prop-types'

const ShowGame = ({ id }) => {
  const [bingoBalls] = useState(() => {
    const bBalls = []
    for (let i = 1; i <= 75; i += 1) {
      bBalls.push(i)
    }
    return bBalls
  })
  const [numbers, setNumbers] = useState([])
  const [chosenNumbers, setChosenNumbers] = useState([])
  const [letterToShow, setLetterToShow] = useState('B')
  const [numberToShow, setNumberToShow] = useState(1)
  const [realtime, setRealtime] = useState(null)

  const getNumbers = async () => {
    try {
      const { data, error } = await supabase
        .from('BingoPlays')
        .select('NumbersPlayed')
        .eq('id', id)
      if (error) {
        throw error
      }
      const importantData = data[0].NumbersPlayed
      setChosenNumbers(importantData)
      setNumbers(
        bingoBalls.filter(elementB => !importantData.includes(elementB)),
      )
    } catch (error) {
      console.error('Error al obtener datos de Supabase:', error.message)
    }
  }

  const handle = payload => {
    console.log(payload)
    if (payload.eventType === 'UPDATE') {
      getNumbers()
    }
  }

  useEffect(() => {
    const channelA = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'BingoPlays',
        },
        payload => handle(payload),
      )
      .subscribe()
    setRealtime(channelA)

    return () => {
      if (realtime) {
        realtime.unsubscribe()
      }
    }
  }, [])

  getNumbers()

  return (
    <div className='gamer_container'>
      <div className='game_table_global_container'>
        <div className='game_table_container'>
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
      <div className='bingo_card_container'>
        <div className='letter_show'>{letterToShow}</div>
        <div className='number_show'>
          <button
            className='arrow_number'
            type='button'
            aria-label='arrow_number'
          />
          <div className='number_show_container'>
            <div className='number_show_number'>{numberToShow}</div>
          </div>
          <button
            className='arrow_number down'
            type='button'
            aria-label='arrow_number down'
          />
        </div>
      </div>
    </div>
  )
}

ShowGame.propTypes = {
  id: Proptypes.string.isRequired,
}

export default ShowGame
