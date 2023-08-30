import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../utilits/helper"

let initialState = {
    userData: [],
    pageSize: 5,
    totalItemsCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "follow": 
        return {...state,
            userData: updateObjectInArray(state.userData, action.userId, "id", {followed: true})
            }
        case "unfollow": 
        return {...state,
            userData: updateObjectInArray(state.userData, action.userId, "id", {followed: false})
           }
        case "setusers":
            return {...state, userData: action.users }
        case "setcurrentpage":
            return {...state, currentPage: action.currentPage }
        case "setTotalCountAC":
            return {...state, totalItemsCount: action.totalCount }
        case "toogleIsFetching":
            return {...state, isFetching: action.isFetching }
        case "followingInProgress":
            return {...state, 
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    } 
}

export const follow = (userId) => {return {type: 'follow', userId}}

export const unfollow = (userId) => {return {type: 'unfollow', userId}}

export const setUsers = (users) => {return {type: 'setusers', users}}

export const setCurrentPage = (currentPage) => {return {type: 'setcurrentpage', currentPage}}

export const setTotalCount = (totalCount) => {return {type: 'setTotalCountAC', totalCount}}

export const setIsFetching = (isFetching) => {return {type: 'toogleIsFetching', isFetching}}

export const toogleFollowingInProgress = (isFetching, userId) => {return {type: 'followingInProgress', isFetching, userId}}

export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true))
   let response = await usersAPI.getUsers(currentPage, pageSize)
   dispatch(setIsFetching(false))
   dispatch(setUsers(response.items))
   dispatch(setTotalCount(response.totalCount))
}
export const followUnfollowThunkCreator = (propsId, serverAction, funcAction) => async (dispatch) => {
    dispatch(toogleFollowingInProgress(true, propsId))
    let response = await usersAPI.followUnfollow(propsId, serverAction)
    if (response.resultCode === 0) {
        dispatch(funcAction(propsId))
    }
    dispatch(toogleFollowingInProgress(false, propsId))
}


export default usersReducer