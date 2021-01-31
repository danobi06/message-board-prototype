import reduce from 'lodash/fp/reduce'
import actionTypes from './action-types'
import navActionTypes from '../navigation/action-types'

const initialState = {
    messages: {},
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case navActionTypes.SET_CHANNELS: {
            return {
                messages: reduce((acc, curr) => ({
                    ...acc,
                    [curr]: []
                }), {}, action.payload)
            }
        }
        case actionTypes.FETCH_MESSAGES: {
            const { channel, messages } = action.payload
            return {
                messages: {
                    ...state.messages,
                    [channel]: messages
                }
            }
        }
        case actionTypes.SET_MESSAGE: {
            const { channel, message, timestamp, uuid } = action.payload
            return {
                messages: {
                    ...state.messages,
                    [channel]: [
                        { channel, message, timestamp, uuid },
                        ...state.messages[channel]
                    ]
                }
            }
        }
        default: {
            return state
        }
    }
}