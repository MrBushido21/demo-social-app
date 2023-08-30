import { authAPI, usersAPI } from "../api/api";
import { headerLoginThunk } from "./authReducer";

let initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setInitializedSuccess": 
       return {
        ...state,
        initialized: true,
       }
        default:
            return state;
    }
}

export const initializedSuccess = () => {
    return {type: "setInitializedSuccess"} 
}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(headerLoginThunk())
    promise.then(() => {
        dispatch(initializedSuccess())
    })  
}


export default appReducer