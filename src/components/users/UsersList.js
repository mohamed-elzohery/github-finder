import React, {  useContext } from 'react';
import Spinner from '../../UI/Spinner';
import GithubContext from '../../context/github/GithubContext';
import UserItem from './UserItem';

const UsersList = () => {
    const {users, isLoading} = useContext(GithubContext);
    
    if(isLoading){
        return <Spinner />
    }else{
        return <div className='grid grid-cols-1 xlg:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {users.map(user => <UserItem key={user.id} user={user} />)}
        </div>
    }
}

export default UsersList;