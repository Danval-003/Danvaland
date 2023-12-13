import { React, useState } from 'react'
import './BingoWheel.scss'

const BingoWheel = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <div className='wheel'>
        <div className='bar' />
        <div className='bar2' />
        <div className='bar3' />
        <div className='bar4' />
        <div className='barV' />
        <div className='barH' />
      </div>
      <div className='baseContainer'>
        <div className='base' />
      </div>
      <div className='crankContainer'>
        <div className='crank' />
      </div>
    </div>
  )
}

export default BingoWheel
