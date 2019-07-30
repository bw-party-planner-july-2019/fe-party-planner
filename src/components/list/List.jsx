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
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    card: {
        color: 'white',
        minWidth: 275,
        width: 300,
        backgroundColor: '#B33771',
    },
    whiteStyle: {
        color: 'white',
        '&:checked': {
            color: 'white',
        },
    },
}));

export default function DisplayList({party_id, list}) {
    const classes = useStyles();
    const listOfItems = list.filter(item => item.party_id = party_id);
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <Grid container spacing={0}>
            <Card className={classes.card}>
                <List className={classes.list}>
                    {console.log("checked items ", checked)}
                    {listOfItems.map(item => {
                        return (
                            <ListItem key={item.id} role={undefined} dense button onClick={handleToggle(item)}>
                                <ListItemIcon>
                                    <Checkbox className={classes.whiteStyle}
                                        edge="start"
                                        checked={checked.indexOf(item) !== -1}
                                        value={item.party_id}
                                        disableRipple

                                        inputProps={{'aria-labelledby': `${item.item} ${item.id}`}}
                                    />
                                </ListItemIcon>
                                <ListItemText id={`${item.item} ${item.id}`} primary={item.item}/>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="comments">
                                        <EditIcon className={classes.whiteStyle}/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>
            </Card>
        </Grid>

    );

}
