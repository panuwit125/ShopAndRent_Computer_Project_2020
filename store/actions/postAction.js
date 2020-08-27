import * as types from '../types'

export const updateTypeBland = (payload) => async dispatch => {
    dispatch({
        type: types.UPDATE_TYPEBLAND,
        payload: payload
    })
}
export const updateNavbar = (payload) => async dispatch => {
    dispatch({
        type: types.UPDATE_NAVBAR,
        payload: payload
    })
}

export const updateNavbarres = (payload) => async dispatch => {
    dispatch({
        type: types.UPDATE_NAVBARRES,
        payload: payload
    })
}

export const updateBird = (payload) => async dispatch => {
    dispatch({
        type: types.UPDATE_BIRD,
        payload: payload
    })
}

export const updatePost = (payload) => async dispatch => {
    dispatch({
        type: types.UPDATE_POST,
        payload: payload
    })
}

export const updateTime = (payload) => async dispatch => {
    dispatch({
        type: types.UPDATE_TIME,
        payload: payload
    })
}

export const updateToken = (payload) => async dispatch => {
    dispatch({
        type: types.UPDATE_TOKEN,
        payload: payload
    })
}