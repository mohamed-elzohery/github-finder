import axios from "axios";


const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({
    baseURL:  GITHUB_URL,
    headers:{
        Authorization: `token ${GITHUB_TOKEN}`
    }
})

export const fetchUsers = async (text) => {
    const queryParams = new URLSearchParams({
        q: text
    });
    
    const {data:{items}} = await github.get(`/search/users?${queryParams}`);
    const users = items.map(({id, login, avatar_url}) => {return{login,id, avatar_url}});
    return users;
};

export const fetchUserData =  async (login) => {

    const [{data: user}, {data: repos}] = await Promise.all(
        [github.get(`/users/${login}`),
         github.get(`/users/${login}/repos`)]);

    return {user, repos};
}
