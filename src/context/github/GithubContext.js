import { createContext, useReducer, useCallback } from "react";
import GithubReducer from './GithubReducer';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const GithubContext = createContext({
    users: [],
    isLoading: false,
    fetchUsers: () => {},
    resetAllUsers: () => {}
});

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    
    const fetchUsers = useCallback(async (text) => {
        const queryParams = new URLSearchParams({
            q: text
        });
        dispatch({type: 'START_LOADING'});
        const response = await fetch(`${GITHUB_URL}/search/users?${queryParams}`, {
            Authorization: `token ${GITHUB_TOKEN}`
        });
        
        const {items} = await response.json();
        const users = items.map(({id, login, avatar_url}) => {return{login,id, avatar_url}});
        dispatch({
            type: 'GET_USERS',
            payload: users
        });
    }, [])

    const resetAllUsers = () => {
        dispatch({type: 'CLEAR_USERS'});
    }

    return <GithubContext.Provider value={{users: state.users,isLoading: state.isLoading, fetchUsers, resetAllUsers}}>{children}</GithubContext.Provider>
}

export default GithubContext;