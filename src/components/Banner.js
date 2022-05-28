import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function Banner() {

    return(
            <div className='banner'>
                <video className='banner__video' src="./videos/video-1.mp4" autoPlay loop muted />
                <h1 className='banner__title'>Adventure awaits</h1>
                <p className='banner__text'>What are you waiting for?</p>
                <div className='banner__buttons'>
                    <button className='banner__buttons-start'>Get started</button>
                    <button className='banner__buttons-more'>Watch trailer <FontAwesomeIcon icon={faPlay} style={{paddingLeft:'10px'}}></FontAwesomeIcon></button>
                </div>
            </div>
    )
}