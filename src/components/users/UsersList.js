import React, { useCallback, useEffect, useState } from 'react';
import Spinner from '../../UI/Spinner';
const UsersList = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    const fetchUsers = useCallback(async () => {
        const response = await fetch(process.env.REACT_APP_GITHUB_URL + '/users', {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        });
        
        const data = await response.json();

        console.log(data);
        
        setUsers(data.map(({id, login}) => {return{login,id}}));
        setIsLoading(false);
    }, [])

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);
    
    if(isLoading){
        return <Spinner />
    }else{
        return <div className='grid grid-cols-1 xlg:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map(user => <h3 key={user.id}>{user.login}</h3>)}
        </div>
    }
}

export default UsersList;