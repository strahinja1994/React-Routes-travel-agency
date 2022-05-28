import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){

    return(
        <footer className='footer'>
            <div className='footer__headline'>
                <h2 className='footer__headline-title'>Join the Adventure newsletter to receive our best vacation deals</h2>
                <h4 className='footer__headline-text'>You can unsuscribe anytime.</h4>
                <div className='footer__headline-form'>
                    <input className='footer__headline-form--email' placeholder='Your Email' type='email' name='email' />
                    <button className='footer__headline-form--button'>Subscribe</button>
                </div>
                <div className='footer__sections'>
                    <div className='footer__sections-section'>
                        <h6 className='footer__sections-section--title'>About us</h6>
                        <ul className='footer__sections-section--list'>
                            <li><Link to='/' className='footer__link'>How it works</Link></li>
                            <li><Link to='/' className='footer__link'>Testimonials</Link></li>
                            <li><Link to='/' className='footer__link'>Careers</Link></li>
                            <li><Link to='/' className='footer__link'>Investors</Link></li>
                            <li><Link to='/' className='footer__link'>Terms of service</Link></li>
                        </ul>
                    </div>
                    <div className='footer__sections-section'>
                    <h6 className='footer__sections-section--title'>Contact us</h6>
                        <ul className='footer__sections-section--list'>
                            <li><Link to='/' className='footer__link'>Contact</Link></li>
                            <li><Link to='/' className='footer__link'>Support</Link></li>
                            <li><Link to='/' className='footer__link'>Destinations</Link></li>
                            <li><Link to='/' className='footer__link'>Sponsorship</Link></li>
                        </ul>
                    </div>
                    <div className='footer__sections-section'>
                    <h6 className='footer__sections-section--title'>Videos</h6>
                        <ul className='footer__sections-section--list'>
                            <li><Link to='/' className='footer__link'>Submit Video</Link></li>
                            <li><Link to='/' className='footer__link'>Ambassadors</Link></li>
                            <li><Link to='/' className='footer__link'>Agency</Link></li>
                            <li><Link to='/' className='footer__link'>Influencer</Link></li>
                        </ul>
                    </div>
                    <div className='footer__sections-section'>
                    <h6 className='footer__sections-section--title'>Social Media</h6>
                        <ul className='footer__sections-section--list'>
                            <li><Link to='/' className='footer__link'>Instagram</Link></li>
                            <li><Link to='/' className='footer__link'>Facebook</Link></li>
                            <li><Link to='/' className='footer__link'>Twitter</Link></li>
                            <li><Link to='/' className='footer__link'>Youtube</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}