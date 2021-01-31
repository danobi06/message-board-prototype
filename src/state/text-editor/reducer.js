import actionTypes from './action-types'


const initialState = {
    text: '',
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_TEXT:
            return {
                text: action.payload
            }
        default:
            return state
    }
}