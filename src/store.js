import thunk from 'redux-thunk'
import {
    applyMiddleware,
    combineReducers,
    compose,
    createStore
} from 'redux'
import messagesReducer from './state/messages/reducer'
import navigationReducer from './state/navigation/reducer'
import textEditorReducer from './state/text-editor/reducer'

const rootReducer = combineReducers({
    messages: messagesReducer,
    navigation: navigationReducer,
    textEditor: textEditorReducer
})

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
    )
)
