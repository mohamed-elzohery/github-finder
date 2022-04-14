const GithubReducer = (state, action) => {
    if(action.type === 'GET_USERS'){
        return {
            ...state,
            users: action.payload,
            isLoading: false
        }
    }
    return state;
}

export default GithubReducer;