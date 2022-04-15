import { createContext, useReducer, useCallback } from "react";
import GithubReducer from './GithubReducer';
import { useNavigate } from "react-router-dom";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const GithubContext = createContext({
    users: [],
    isLoading: false,
    user: null,
    fetchUsers: () => {},
    resetAllUsers: () => {},
    fetchUser: () => {}
});

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: null,
        isLoading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);
    const navigate = useNavigate();

    
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
    }, []);

    const fetchUser = useCallback( async (login) => {
        dispatch({type: 'START_LOADING'});
        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            Authorization: `token ${GITHUB_TOKEN}`
        });

        if(response.ok){
            const user = await response.json();
            dispatch({
                type: 'GET_USER',
                payload: user
            });

        }else{
            dispatch({type: 'END_LOADING'});
            navigate('/notfound');
        }
    }, [navigate])

    const resetAllUsers = () => {
        dispatch({type: 'CLEAR_USERS'});
    }

    return <GithubContext.Provider value={{users: state.users,
        isLoading: state.isLoading, 
        fetchUsers,
        resetAllUsers,
        user: state.user,
        fetchUser}}>{children}</GithubContext.Provider>
}

export default GithubContext;