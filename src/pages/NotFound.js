import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';

const NotFound = () => {
    return <div className='hero'>
        <div className='hero-content flex-col'>
            <h1 className='text-6xl'>Oh dear...</h1>
            <p className='py-6'>Page not found.</p>
            <Link to='/home' className='btn btn-primary btn-lg'>
                <FaHome className='mr-2' />
                Back to home
            </Link>
        </div>
    </div>
}

export default NotFound;