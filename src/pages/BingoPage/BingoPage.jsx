import { React, useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import './BingoPage.scss'

const supabaseUrl = 'https://nchqsbeokgcngyizhfhe.supabase.co'
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

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
          <h1>Bingo's party</h1>
        </div>
        <div className='initialPage__container__flex__cards'>
          <div className='initialPage__container__cards'>
            {games.map(game => (
              <div key={game.id} className='card'>
                <p>{game.Name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BingoPage
