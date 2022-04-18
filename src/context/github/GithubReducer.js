const GithubReducer = (state, action) => {
    if(action.type === 'GET_USERS'){
        return {
            ...state,
            users: action.payload,
            isLoading: false
        }
    }

    if(action.type === 'START_LOADING'){
        return {
            ...state,
            isLoading: true
        }
    }

    if(action.type === 'END_LOADING'){
        return {
            ...state,
            isLoading: false
        }
    }

    if(action.type === 'CLEAR_USERS'){
        return {
            ...state,
            users: []
        }
    }

    if(action.type === 'GET_USER_DATA'){
        return {
            ...state,
            user: action.payload.user,
            repos: action.payload.repos,
            isLoading: false
        }
    }

    
    return state;
}

export default GithubReducer;