import React from 'react';
import UserSearch from '../components/users/UserSearch';
import UsersList from '../components/users/UsersList';

const Home = () => {
    return <>
        <UserSearch />
        <UsersList />
    </>
}

export default Home;