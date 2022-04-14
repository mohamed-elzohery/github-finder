import { createContext, useState, useCallback } from "react";

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const GithubContext = createContext({
    users: [],
    isLoading: false,
    fetchUsers: () => {}
});

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUsers = useCallback(async () => {
        const response = await fetch(GITHUB_URL + '/users', {
            Authorization: `token ${GITHUB_TOKEN}`
        });
        
        const data = await response.json();
        setUsers(data.map(({id, login, avatar_url}) => {return{login,id, avatar_url}}));
        setIsLoading(false);
    }, [])

    return <GithubContext.Provider value={{users, isLoading, fetchUsers}}>{children}</GithubContext.Provider>
}

export default GithubContext;