import * as types from '../types'

export const updateFirstName = (payload) => async dispatch => {
    dispatch({
        type: types.UPDATE_FIRSTNAME,
        payload: payload
    })
}
export const updateLastName = (payload) => async dispatch => {
    dispatch({
        type: types.UPDATE_LASTNAME,
        payload: payload
    })
}

export const updateSsid = (payload) => async dispatch => {
    dispatch({
        type: types.UPDATE_SSID,
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