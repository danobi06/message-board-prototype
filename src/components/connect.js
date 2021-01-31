import { connect } from 'react-redux'
import getChannels from '../services/get-channels'
import { setChannels } from '../state/navigation/actions'

const fetchChannel = () => dispatch => getChannels()
    .then(({ channels }) => dispatch(setChannels(channels)))
    .catch(err => console.log('err: ', err))

const mapDispatchToProps = {
    fetchChannel
}

export default connect(null, mapDispatchToProps)
