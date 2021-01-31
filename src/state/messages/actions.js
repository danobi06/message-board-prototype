import actionTypes from './action-types.js'

export const fetchMessages = payload => ({
    payload,
    type: actionTypes.FETCH_MESSAGES
})

export const setMessage = payload => ({
    payload,
    type: actionTypes.SET_MESSAGE
})