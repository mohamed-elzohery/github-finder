import { createContext, useReducer, useCallback } from "react";
import GithubReducer from './GithubReducer';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const GithubContext = createContext({
    users: [],
    isLoading: true,
    fetchUsers: () => {}
});

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        isLoading: true
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const fetchUsers = useCallback(async () => {
        const response = await fetch(GITHUB_URL + '/users', {
            Authorization: `token ${GITHUB_TOKEN}`
        });
        
        const data = await response.json();
        const users = data.map(({id, login, avatar_url}) => {return{login,id, avatar_url}});
        dispatch({
            type: 'GET_USERS',
            payload: users
        });
    }, [])

    return <GithubContext.Provider value={{users: state.users,isLoading: state.isLoading, fetchUsers}}>{children}</GithubContext.Provider>
}

export default GithubContext;