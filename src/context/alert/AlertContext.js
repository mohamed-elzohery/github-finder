import React, {createContext, useReducer} from 'react';
import AlertReducer from './AlertReducer';

const initialState = {
    msg: '',
    type: null,
    setAlert: () => {}
}
const AlertContext = createContext(initialState);

export const AlertProvider = ({children}) => {
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const setAlert = (msg, type) => {
        dispatch({type: 'SHOW_ALERT', payload: {msg, type}});
        setTimeout(() => dispatch({type: 'REMOVE_ALERT'}) , 3000);
    }

    return <AlertContext.Provider value={{state, setAlert}}>{children}</AlertContext.Provider>
}

export default AlertContext;