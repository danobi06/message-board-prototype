import CircularProgress from '@material-ui/core/CircularProgress'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import isEmpty from 'lodash/fp/isEmpty'
import map from 'lodash/fp/map'
import Proptypes from 'prop-types'
import React, { useCallback } from 'react'
import styles from './styles'


const Component = ({ classes, channels, currentChannel, handleChannelChange }) => {

    const onChannelChange = useCallback((e, channel) => {
        handleChannelChange(channel);
    }, [handleChannelChange])

    return (
        <div className={classes.root}>
            {isEmpty(channels)
                ? <CircularProgress />
                : <ToggleButtonGroup
                    value={currentChannel}
                    exclusive
                    onChange={onChannelChange}
                    size="large"
                    className={classes.content}
                >
                    {map(ch => {
                        return (
                            < ToggleButton key={ch} value={ch}>
                                <Typography>{ch}</Typography>
                            </ToggleButton>
                        )
                    }, channels)}
                </ToggleButtonGroup >
            }
        </div>
    )
}

Component.displayName = 'Navigation'
Component.propTypes = {
    currentChannel: Proptypes.string.isRequired,
    channels: Proptypes.arrayOf(Proptypes.string).isRequired,
    classes: Proptypes.shape({
        root: Proptypes.string.isRequired
    }),
    handleChannelChange: Proptypes.func.isRequired
}


export default withStyles(styles)(Component)

