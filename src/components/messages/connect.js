import getOr from 'lodash/fp/getOr'
import { connect } from 'react-redux'
import { createSelector, createStructuredSelector } from 'reselect'
import { messagesSelector } from '../../state/messages/selectors'
import { currentChannelSelector } from '../../state/navigation/selectors'


const mapStateToProps = createStructuredSelector({
    currentChannel: currentChannelSelector,
    messages: createSelector(
        currentChannelSelector,
        messagesSelector,
        (currentChannel, messages) => getOr([], `${currentChannel}`, messages),
    )
})

export default connect(mapStateToProps)
