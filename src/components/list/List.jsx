import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from '@material-ui/core/styles';
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function DisplayList({party_id, list}) {
    const classes = useStyles();
    const listOfItems = list.filter(item => item.party_id = party_id);

    const statusOfItems = {};
    listOfItems.map(item =>
        Object.assign(statusOfItems, {[item.item]: item.purchased})
    );

    const [state, setState] = useState(statusOfItems);
    const handleChange = name => event => {
        setState({...state, [name]: event.target.checked});
    };


    return (
        <List className={classes.root}>
            { console.log(state)}
                    {listOfItems.map(item => {
                        return (
                            <ListItem   key={item.id} role={undefined} dense button onClick={handleChange(item.item)}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={state[item.purchased]}
                                        // onChange={handleChange(item.item)}
                                        value={item.party_id}
                                        disableRipple
                                        color="primary"
                                        inputProps={{ 'aria-labelledby': `${item.item} ${item.id}` }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={`${item.item} ${item.id}`} primary={item.item}  />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="comments">
                                        <EditIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
        </List>
    );
}
