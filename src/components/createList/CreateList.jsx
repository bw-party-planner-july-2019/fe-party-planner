import React, {useState} from 'react'
import {withRouter} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Items from "./Items";
import AddItem from "./AddItem";

const useStyles = makeStyles(theme => ({
    card: {
        color: 'white',
        minWidth: 275,
        width: 300,
        backgroundColor: '#B33771',
    },
    tableCell: {
        color: 'white',
    }
}));

function CreateList() {
    /*const list = [
        {id: 1, party_id: 1, item: 'balloons', purchased: false, price: 5},
        {id: 2, party_id: 1, item: 'drinks', purchased: false, price: 55},
        {id: 3, party_id: 1, item: 'cake', purchased: false, price: 20},
        {id: 4, party_id: 2, item: 'juice', purchased: false, price: 5},
        {id: 5, party_id: 2, item: 'cups', purchased: false, price: 10},
        {id: 6, party_id: 2, item: 'cookies', purchased: false, price: 15},
        {id: 7, party_id: 3, item: 'decorations', purchased: false, price: 25},
        {id: 8, party_id: 3, item: 'candy', purchased: false, price: 20},
        {id: 9, party_id: 3, item: 'music', purchased: false, price: 10},
    ];
    const listOfItems = [];
    list.map(item =>
        listOfItems.push({["item"]: item.item, ["price"]: item.price,})
    );*/

    const [items, setItems] = useState([]);

    const classes = useStyles();

    const addItemToList = item =>{
        setItems( [...items, item]);
        console.log("Updated list: ", items)
    };

    return (
        <Card className={classes.card}>
            <Items items={items}/>
            {console.log("items: ",items)}
            <AddItem addItemToList={addItemToList} />

        </Card>
    );
}


export default withRouter(CreateList);