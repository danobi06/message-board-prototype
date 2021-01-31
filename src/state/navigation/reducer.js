import actionTypes from './action-types'


const initialState = {
    channels: [],
    currentChannel: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_CHANNELS:
            return {
                ...state,
                channels: action.payload
            }
        case actionTypes.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload || ''
            }
        default:
            return state
    }
}