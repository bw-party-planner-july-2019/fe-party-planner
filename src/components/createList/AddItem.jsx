import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {blue, green, pink, purple, yellow} from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = makeStyles(theme => ({
    table: {
        color: 'white',
        minWidth: 275,
        width: 500,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderTop: '1px solid white',
        marginBottom: theme.spacing(1),
    },
}));

const ColorButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: '#FEA47F',
        height: 50,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        '&:hover': {
            backgroundColor: '#fe885e',
        },
    },
}))(Button);

const ColorInput = withStyles(theme => ({
    root: {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
        backgroundColor: yellow[100],
        color: theme.palette.getContrastText(pink[500]),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        '&:hover': {
            backgroundColor: yellow[200],
        },
    },
}))(TextField);


export default function AddItem(props) {
    const classes = useStyles();

    const [item, setItem] = useState({});

    const saveItem = item => props.addItemToList(item);

    function handleChange(event) {
        const updatedItem = {...item, [event.target.name]: event.target.value};
        setItem(updatedItem);
    }

    return (

            <div className={classes.table}>

                    <ColorInput
                               color={"primary"}
                               type="text"
                               name="item"
                               placeholder="Item"
                               onChange={handleChange}
                               margin="normal"
                               variant="outlined"
                    />
                    <ColorInput
                               name="price"
                               placeholder="Price"
                               onChange={handleChange}
                               type="number"
                               InputLabelProps={{
                                   shrink: true,
                               }}
                               margin="normal"
                               variant="outlined"
                    />

                <ColorButton variant="contained" color="primary" onClick={() => saveItem(item)}>
                    <AddIcon/>
                </ColorButton>

            </div>

    )
}