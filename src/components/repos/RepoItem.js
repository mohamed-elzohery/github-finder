import React from 'react';
import {FaLink, FaEye, FaUtensils , FaStar, FaInfo} from 'react-icons/fa'

const RepoItem = ({repo}) => {
    const{
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    } = repo;

    return <div className='mb-2 rounded-md card'>
        <div className='card-body'>
            <h3 className='mb-2 text-xl font-bold'>
                <a href={html_url} className='flex items-center' target='_blank' rel="noreferrer">
                    <FaLink className='mr-3' />{name}
                </a>
            </h3>
            <p className='mb-3'>{description}</p>
            <div>
                <div className='mr-2 badge badge-info badge-lg p-2'>
                <FaEye className='mr-3' />{watchers_count}
                </div>
                <div className='mr-2 badge badge-success badge-lg'>
                <FaStar className='mr-3' />{stargazers_count}
                </div>
                <div className='mr-2 badge badge-danger badge-lg'>
                <FaInfo className='mr-3' />{open_issues}
                </div>
                <div className='mr-2 badge badge-warning badge-lg'>
                <FaUtensils className='mr-3' />{forks}
                </div>
            </div>
        </div>
    </div>
}

export default RepoItem;