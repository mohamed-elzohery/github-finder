import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { fetchUsers } from '../../context/github/GithubActions';

const UserSearch = (props) => {
    const {users, dispatch} = useContext(GithubContext);
    const {setAlert} = useContext(AlertContext);

    const [enteredVal, setVal] = useState('');

    const onChangeHandler = (e => setVal(e.target.value));
    const onResetHandler = () => {
        dispatch({type: 'CLEAR_USERS'});
        setVal('');
    };
    const onSumbitHandler = async (e) => {
        e.preventDefault();
        if(enteredVal.trim() !== ''){
            dispatch({type: 'START_LOADING'});
            const users = await fetchUsers(enteredVal);
            dispatch({type: 'GET_USERS', payload: users});
            setVal('');
        }else{
            setAlert('Please Enter Somthing!', 'error');
        }
    };
    return <div className='grid grid-cols-1 md:grid-cols-2 mb-8 gap-8'>
        <form onSubmit={onSumbitHandler}>
            <div className='form-controls relative'>
                <input onChange={onChangeHandler} value={enteredVal} name="search" type="text" placeholder="search"  className='text-black input input-lg bg-gray-200 pr-44 md:pr-24 lg:pr-44 w-full' />
                <button type='sumbit' className='btn btn-lg absolute rounded-l-none w-40 md:w-20 lg:w-40 top-0 right-0'>Search</button>
            </div>
        </form>
        {users.length > 0 && (
        <div>
            <button className='btn btn-lg btn-ghost' onClick={onResetHandler}>Reset</button>
        </div>
        )}
    </div>
}

export default UserSearch;