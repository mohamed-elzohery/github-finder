import { createContext, useReducer } from "react";
import GithubReducer from './GithubReducer';

const GithubContext = createContext({
    users: [],
    isLoading: false,
    user: {},
    repos: [],
    fetchUsers: () => {},
    resetAllUsers: () => {},
    fetchUser: () => {},
    fetchRepos: () => {}
});

export const GithubProvider = ({children}) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        isLoading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);
    
    return <GithubContext.Provider value={{
        ...state,
        dispatch,
        }}>{children}</GithubContext.Provider>
}

export default GithubContext;