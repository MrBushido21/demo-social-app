import { authAPI, usersAPI } from "../api/api";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: "",
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setUserData": 
       return {
        ...state,
        ...action.data,
       }
       case "setError": // Додаємо action для збереження повідомлення про помилку
      return {
        ...state,
        error: action.error,
      };
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => {
    return {type: "setUserData", data: {id, email, login, isAuth}} 
}
export const setError = (error) => {
    return { type: "setError", error };
  };


export const headerLoginThunk = () => async (dispatch) => {
   let response = await usersAPI.headerLogin()
        if (response.data.resultCode === 0) {
            let { id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }

}
export const LoginThunk = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(headerLoginThunk())
    } else {
        dispatch(setError(response.data.messages));
    }

}
export const LogoutThunk = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
    


export default authReducer