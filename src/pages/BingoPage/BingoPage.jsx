import { React, useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import './BingoPage.scss'

const supabaseUrl = 'https://nchqsbeokgcngyizhfhe.supabase.co'
const supabase = createClient(
  supabaseUrl,
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jaHFzYmVva2djbmd5aXpoZmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0MTI1NTYsImV4cCI6MjAxNzk4ODU1Nn0.klSKxsTNefjDXG_ybCv4f7l-OFT2yDMQUqTPs0PUaA4',
)

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
