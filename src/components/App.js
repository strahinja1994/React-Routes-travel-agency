import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Services from '../components/pages/Services';
import SignUp from '../components/pages/Signup';
import Products from '../components/pages/Products';

export default function App() {
    return(
        <div className='app'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />}
                    />
                    <Route path='/products' element={<Products />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/sign-up' element={<SignUp />} />
                </Routes>
            </Router>
        </div>
    )
}