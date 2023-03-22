import React from 'react'
import './Card.css'
import { CardType } from '../interface/CardType'

function Card(props: CardType) {
    return (
        <div className='card flex justify-center items-center flex-col m'>
            <div className="icon_sec flex justify-center items-center">
                <div className="icon w-20 h-20 rounded-full relative flex justify-center items-center">
                    <img src={`src/assets/${props.logo}`} alt="" />
                </div>

            </div>
            <div className="content mt-[-50px] bg-gradient-to-r from flex justify-end gap-2 pb-8 md:pb-4 items-center flex-col px-6">
                <div className="name text-xs md:text-sm font-Tomorrow text-font_blue">{props.name}</div>
                <div className="realtime_price flex justify-around items-center w-full p-1 bg-blue rounded-full">
                    <div className="price text-sm md:text-base font-Tomorrow place-items-end text-font_white">${props.price}</div>
                    <div className={`price_change srink text-xs font-Tomorrow ${Math.sign(props.changePercent) === -1 ? "text-red" : "text-green"}`}>
                        {
                            `${Math.sign(props.changePercent) === -1 ? `${props.changePercent}%` : `+${props.changePercent}%`}`
                        }</div>
                </div>
                <div className="price_tag text-xs md:text-sm font-Tomorrow text-font_blue_light">Price</div>
                <div className="tvl text-sm md:text-base flex justify-center text-font_white items-center w-full p-1 bg-blue rounded-full">${props.tvl}</div>
                <div className="tvl_tag text-xs md:text-sm font-Tomorrow text-font_blue_light">TVL</div>
                <div className="pairs flex justify-around items-center w-6/12 p-2 bg-blue rounded-full">{
                    props.pairings.map((item, index) => {
                        console.log(item)
                        return(
                           <img className="w-5 " key={index} src={`src/assets/${item}`} alt="pair logo" /> 
                        )
                    })
                }</div>
                <div className="pair_tag text-xs md:text-sm font-Tomorrow text-font_blue_light">Popular pairs</div>
            </div>
        </div>
    )
}

export default Card