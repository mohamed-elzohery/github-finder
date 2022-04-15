
const AlertReducer = (state, action) => {
    if(action.type === 'SHOW_ALERT'){
        return action.payload;
    }

    if(action.type === 'REMOVE_ALERT'){
        return {
            ...state,
            msg: '',
            type: null
        };
    }

    return {
        ...state,
        msg: '',
        type: null
    };

}

export default AlertReducer;