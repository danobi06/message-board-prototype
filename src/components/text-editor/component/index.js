import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import TextField from '@material-ui/core/TextField'
import isEmpty from 'lodash/fp/isEmpty'
import Proptypes from 'prop-types'
import React, { useCallback } from 'react'
import styles from './styles'


const Component = ({ classes, currentChannel, sendMessage, setText, text }) => {

    const handleChange = useCallback((e) => {
        setText(e.target.value)
    }, [setText])

    const handleSubmit = useCallback(() => {
        sendMessage({
            channel: currentChannel,
            message: text
        })
    }, [currentChannel, sendMessage, text])

    return (
        <Paper className={classes.root}>
            <TextField
                label="Editor"
                multiline
                rows={10}
                value={text}
                fullWidth
                onChange={handleChange}
                className={classes.editor}
                disabled={isEmpty(currentChannel)}
            />
            <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={isEmpty(text)}
            >
                Submit
            </Button>
        </Paper>
    )
}

Component.displayName = 'TextEditor'
Component.propTypes = {
    classes: Proptypes.shape({
        editor: Proptypes.string.isRequired,
        root: Proptypes.string.isRequired,
    }),
    currentChannel: Proptypes.string.isRequired,
    text: Proptypes.string.isRequired,
    setText: Proptypes.func.isRequired,
    sendMessage: Proptypes.func.isRequired
}


export default withStyles(styles)(Component)
