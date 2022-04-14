import React from 'react';
import {FaGithub} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return <nav className='navbar mb-12 shadow-lg text-neutral-content bg-neutral'>
        <div className='container  mx-auto'>
            <Link to='/' className='flex items-center text-lg font-bold'>
                <FaGithub className='text-3xl'/>
                <h1 className='ml-3'>Github Finder</h1>
            </Link>
            <div className='ml-auto flex'>
                <Link className='btn btn-ghost btn-sm rounded-btn' to='/'>
                    Home
                </Link>
                <Link className='btn btn-ghost btn-sm rounded-btn' to='/about'>
                    About
                </Link>
            </div>
        </div>
    </nav>
}

export default Navbar;