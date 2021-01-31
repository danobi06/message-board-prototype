import actionTypes from './action-types.js'

export const setText = payload => ({
    payload,
    type: actionTypes.SET_TEXT
})
