import React from 'react';
import {Link} from 'react-router-dom';
import {cardsData} from './CardsData';

export default function Cards() {

    const cards = cardsData.map((card,index) => {
        return(
            <div className={card.id} key={index}>
                <Link className='card__link' to={card.path}>
                    <figure className='card__figure'>
                        <img src={card.image} alt={card.alt} className='card__figure-img'/>
                        <div className='card__figure-info'>
                            <p>{card.info}</p>
                        </div>
                    </figure>
                    <div className='card__about'>
                        <h4 className='card__about-text'>{card.text}</h4>
                    </div>
                </Link>
            </div>
    )
    })

    return(
        <div className='cards__container'>
            <h1 className='cards__title'>Check out EPIC Destinations!</h1>
            <div className='cards'>
                {cards}
            </div>
        </div>
    )
   
}