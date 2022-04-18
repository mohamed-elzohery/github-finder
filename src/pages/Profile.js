import React, { useContext, useEffect, useCallback } from 'react';
import {FaArrowLeft, FaUserFriends, FaUsers, FaCodepen, FaStore} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import ReposList from '../components/repos/ReposList';
import GithubContext from '../context/github/GithubContext';
import Spinner from '../UI/Spinner';
import {fetchUserData} from '../context/github/GithubActions'

const Profile = () => {
    const {login} = useParams();
    const {user, isLoading, repos, dispatch} = useContext(GithubContext);
    console.log(user);


        const fetchPageData = useCallback(async () => {
            dispatch({type: 'START_LOADING'});
            const userData = await fetchUserData(login);
            dispatch({type: 'GET_USER_DATA', payload: userData});
        }, [dispatch, login]);
        
        const {
            bio,
            avatar_url,
            type,
            hireable,
            name,
            html_url,
            blog,
            followers,
            following,
            public_gists,
            public_repos,
            location,
            twitter
        } = user;

    useEffect(() => {
        fetchPageData();
    }, [fetchPageData])


    if(isLoading) return <Spinner />;

    return (<div className='flex flex-col '>
        <Link className='btn btn-lg btn-ghost w-60 mb-6' to="/home"><FaArrowLeft className='mr-4' />Back To Search</Link>
        <div className='flex lg:flex-nowrap flex-wrap items-start justify-center'>
            <div className='lg:basis-4/12 basis-full relative'>
                <figure>
                    <img className=" mask md:mask-squircle w-full grayscale hover:grayscale-0" src={avatar_url} alt="profile_pic" />
                </figure>
                <div className='absolute bottom-10 w-full'>
                    <h2 className='text-5xl text-slate-100  text-center'>{name || login}</h2>
                    <p className='text-2xl text-slate-100  text-center'>{login}</p>
                </div>
            </div>
            <div className='lg:basis-7/12 basis-full ml-auto mt-12'>
                <div className='flex items-end'>
                    <h1 className='text-6xl font-bold'>{name || login}</h1>
                    <div className='badge badge-primary ml-4 badge-lg'>{type}</div>
                    {hireable && <div className='badge badge-warning ml-4 badge-lg'>Hireable</div>}
                </div>
                <p className='text-2xl mt-9'>{bio}</p>
                <a href={html_url} target="_blank" rel='noreferrer' className='btn btn-secondary mt-6'>Visit GitHub Profile</a>
                <div className='mt-12 p-3 rounded shadow-lg flex'>
                {location && <div className="stat">
                    <div className="stat-title">Location</div>
                    <div className="text-2xl font-bold text-secondary">{location}</div>
                </div>}
                {blog && <div className="stat">
                    <div className="stat-title">Blog</div>
                    <div className=" text-2xl font-bold text-secondary"><a href={`https://${blog}`} target="_blank" rel='noreferrer'>
                                {blog}
                            </a></div>
                </div>}
                {twitter && <div className="stat">
                    <div className="stat-title">Twitter</div>
                    <div className="text-2xl font-bold text-secondary">
                            <a href={`https://${twitter}`} target="_blank" rel='noreferrer'>
                                {twitter}
                            </a>
                        </div>
                </div>}
                </div>
            </div>
        </div>
        <div className='flex shadow-lg mt-20 p-4 rounded flex-wrap md:flex-nowrap'>
         <div className="stat border-r">
                    <div className="stat-figure" ><FaUsers className='text-6xl text-secondary'/></div>
                    <div className="stat-title">Followers</div>
                    <div className=" text-2xl font-bold text-secondary">{followers}</div>
                </div>
        <div className="stat border-r">
                    <div className="stat-figure" ><FaUserFriends className='text-6xl text-secondary'/></div>
                    <div className="stat-title">Following</div>
                    <div className=" text-2xl font-bold text-secondary">{following}</div>
                </div>
        
         <div className="stat border-r">
                    <div className="stat-figure" ><FaCodepen className='text-6xl text-secondary'/></div>
                    <div className="stat-title">Gists</div>
                    <div className=" text-2xl font-bold text-secondary">{public_gists}</div>
                </div>

         <div className="stat">
                    <div className="stat-figure" ><FaStore className='text-6xl text-secondary'/></div>
                    <div className="stat-title">Repos</div>
                    <div className=" text-2xl font-bold text-secondary">{public_repos}</div>
        </div>
        </div>

        <ReposList repos={repos} />
    </div>)
}

export default Profile;