import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return <div className='hero'>
        <div className='hero-content text-center max-w-md flex-col'>
            <h1 className='text-6xl'>About The app</h1>
            <p className='text-lg py-6'>
                Github finder application built by react and Github API to get access to different Github resourecs like profiles, repos and etc...
            </p>
            <Link to='/' className='btn btn-primary btn-lg'>Get Started</Link>
        </div>
    </div>
}

export default About;