import actionTypes from './action-types.js'

export const setChannels = payload => ({
    payload,
    type: actionTypes.SET_CHANNELS
})
export const setCurrentChannel = payload => ({
    payload,
    type: actionTypes.SET_CURRENT_CHANNEL
})