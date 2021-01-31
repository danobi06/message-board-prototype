import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import isEmpty from 'lodash/fp/isEmpty'
import map from 'lodash/fp/map'
import Proptypes from 'prop-types'
import React from 'react'
import styles from './styles'


const Component = ({ classes, currentChannel, messages }) => {
    return (
        <Paper className={classes.root}>
            {isEmpty(messages)
                ? <Typography className={classes.center}>
                    {currentChannel
                        ? 'This channel does not have any messages.'
                        : 'Please select a channel to view messages'
                    }
                </Typography>
                : <List className={classes.list}>
                    {map(({ message, timestamp, uuid }) => {
                        return (
                            <div key={uuid}>
                                <ListItem alignItems="flex-start">
                                    <ListItemText
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    className={classes.inline}
                                                    color="textPrimary"
                                                >
                                                    {`${timestamp} - `}
                                                </Typography>
                                                {message}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider />
                            </div>
                        )
                    }, messages)}
                </List>
            }
        </Paper>
    )
}

Component.displayName = 'Messages'
Component.propTypes = {
    classes: Proptypes.shape({
        center: Proptypes.string.isRequired,
        inline: Proptypes.string.isRequired,
        list: Proptypes.string.isRequired,
        root: Proptypes.string.isRequired
    }),
    currentChannel: Proptypes.string.isRequired,
    messages: Proptypes.array.isRequired
}
export default withStyles(styles)(Component)
