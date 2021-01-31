import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import postMessage from '../../services/post-message'
import { setMessage } from '../../state/messages/actions'
import { currentChannelSelector } from '../../state/navigation/selectors'
import { setText } from '../../state/text-editor/actions'
import { textSelector } from '../../state/text-editor/selectors'

const mapStateToProps = createStructuredSelector({
    currentChannel: currentChannelSelector,
    text: textSelector
})

const sendMessage = ({ channel, message }) => dispatch => {
    postMessage(channel, message).then(data => {
        dispatch(setText(''))
        dispatch(setMessage(data))
    })
}

const mapDispatchToProps = {
    setText,
    sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps)
