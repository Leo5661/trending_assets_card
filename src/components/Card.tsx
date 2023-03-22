import React from 'react'
import './Card.css'
import { CardType } from '../interface/CardType'

function Card(props: CardType) {
    return (
        <div className='card'>
            <div className="icon"></div>
            <div className="content"></div>
        </div>
    )
}

export default Card