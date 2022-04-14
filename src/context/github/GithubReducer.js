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

    if(action.type === 'CLEAR_USERS'){
        return {
            ...state,
            users: []
        }
    }
    return state;
}

export default GithubReducer;