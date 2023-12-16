import { React, useState, useEffect } from 'react'
import './BingoPage.scss'
import { BingoArrow } from '@assets'
import supabase from '@services'

const BingoPage = () => {
  const [realtime, setRealtime] = useState(null)
  const [games, setGames] = useState([])

  const getIds = async () => {
    try {
      const { data, error } = await supabase
        .from('BingoPlays')
        .select('id, Name')
      if (error) {
        throw error
      }
      console.log(data)
      setGames(data)
    } catch (error) {
      console.error('Error al obtener datos de Supabase:', error.message)
    }
  }

  useEffect(() => {
    getIds()
  }, [])

  const handle = payload => {
    if (payload.eventType === 'DELETE') {
      getIds()
    } else if (payload.eventType === 'INSERT') {
      getIds()
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

  return (
    <div className='initialPage'>
      <div className='initialPage__container'>
        <div className='initialPage__container__title'>
          {['B', 'I', 'N', 'G', 'O'].map(letter => (
            <div key={letter} className='initialPage__container__title_letter'>
              <p>{letter}</p>
            </div>
          ))}
        </div>
        <div className='initialPage__container__flex__cards'>
          <div className='initialPage__container__cards'>
            {games.map(game => (
              <div key={game.id} className='card'>
                <p>{game.Name}</p>
                <img src={BingoArrow} alt='Arrow Bingo' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BingoPage
