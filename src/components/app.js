import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import Proptypes from 'prop-types'
import React, { useEffect } from 'react'
import Messages from './messages'
import Navigation from './navigation'
import styles from './styles'
import TextEditor from './text-editor'


const Component = ({ classes, fetchChannel }) => {
    useEffect(() => { fetchChannel() })

    return (
        <Paper className={classes.root}>
            <Navigation />
            <div className={classes.row}>
                <Messages />
                <TextEditor />
            </div>
        </Paper>
    )
}

Component.displayName = 'App'
Component.propTypes = {
    classes: Proptypes.shape({
        root: Proptypes.string.isRequired,
        row: Proptypes.string.isRequired
    }),
    fetchChannel: Proptypes.func.isRequired
}
export default withStyles(styles)(Component)
