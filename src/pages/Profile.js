import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';

const Profile = () => {
    const {login} = useParams();
    const {fetchUser, user} = useContext(GithubContext);

    useEffect(() => {
        fetchUser(login);
    }, [fetchUser])

    console.log(user);

    return <div>{login}</div>
}

export default Profile;