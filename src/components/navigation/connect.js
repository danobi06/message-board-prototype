import isEmpty from 'lodash/fp/isEmpty'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import getMessages from '../../services/get-messages'
import { fetchMessages } from '../../state/messages/actions'
import { setCurrentChannel } from '../../state/navigation/actions'
import { channelsSelector, currentChannelSelector } from '../../state/navigation/selectors'
import { setText } from '../../state/text-editor/actions'


const mapStateToProps = createStructuredSelector({
    channels: channelsSelector,
    currentChannel: currentChannelSelector
})

const handleChannelChange = payload => dispatch => {
    if (!isEmpty(payload)) {
        getMessages(payload).then(data => dispatch(fetchMessages(data)))
    }
    dispatch(setCurrentChannel(payload))
    dispatch(setText(''))
}

const mapDispatchToProps = {
    handleChannelChange
}

export default connect(mapStateToProps, mapDispatchToProps)
