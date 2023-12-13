import React from 'react'
import './BingoGameCard.scss'

const BingoGameCard = ({ name, onClick }) => {
    return (
        <div onClick={onClick} className='card'>
            {name}
        </div>
    )
}

export default BingoGameCard
