import { profileAPI, usersAPI } from "../api/api"

let initialState = {
    postData: [
        { id: 1, message: "Hello, how are you?" },
        { id: 2, message: "Tima, hello!" },
      ],
      profile: null,
      status: ""
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case "renderPost": 
            return {
                ...state,
                postData: [...state.postData, {id: state.postData.length + 1, message: action.text } ]
            }
        case "setUserProfile":
            return {
                ...state, profile: action.profile
            }
        case "setStatus":
            return {
                ...state, status: action.status
            }
        case "deletPost":
            return {
                ...state, 
                postData: state.postData.filter(p => p.id != action.postId)
            }
        default:
            return state;
    }  

}

export const renderPostActionCreater = (text) => {
    return { type: "renderPost", text }
}
export const setUserProfile = (profile) => {
    return { type: "setUserProfile", profile }
}
export const setStatus = (status) => {
    return { type: "setStatus", status }
}
export const deletPost = (postId) => {
    return { type: "deletPost", postId }
}

export const profileUsersThunk = (userId) => {
    return (dispatch) => {
        usersAPI.profileUsers(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
         });
    }
}
export const setStatusThunk = (userId) => async (dispatch) => {
   let response = await profileAPI.getStatus(userId)
   dispatch(setStatus(response.data))
}

export const updateStatusThunk = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer