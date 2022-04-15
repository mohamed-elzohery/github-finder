import React, { useContext } from 'react';
import UserSearch from '../components/users/UserSearch';
import UsersList from '../components/users/UsersList';
import AlertContext from '../context/alert/AlertContext';
import Alert from '../UI/Alert';

const Home = () => {
    const {state: {msg, type}} = useContext(AlertContext);
    console.log(msg, type)
    return <>
        <UserSearch />
        {msg && <Alert msg={msg} type={type} />}
        <UsersList />
    </>
}

export default Home;