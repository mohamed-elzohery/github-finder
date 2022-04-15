import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({user: {login, avatar_url}}) => {
    return <div className='card shadow-md compact bg-base-100 side'>
            <div className="card-body flex flex-row items-center space-x-4">
                <div className='avatar'>
                    <div className="w-16 rounded-full">
                        <img src={avatar_url} alt={login} />
                    </div>
                </div>
            <div className='ml-4'>
                <h1 className='card-title'>{login}</h1>
                <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>Visit profile</Link>
            </div>
            </div>
        </div>
}

export default UserItem;