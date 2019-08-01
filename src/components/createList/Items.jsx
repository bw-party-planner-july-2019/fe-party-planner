import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EmptyList from "./EmptyList";

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

function Items(props) {
    const classes = useStyles();
    const [items, setItems] = useState(props.items);

    useEffect(() => {
        setItems(props.items);
    }, [props.items]);

    return (
        <Card className={classes.card}>
            <Table className={classes.table}>
                {props.items.length === 0 && (
                    <EmptyList/>
                )}
                {props.items.length > 0 && (
                    props.items.map((row, item) => (
                        <div>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.tableCell}>№</TableCell>
                                    <TableCell className={classes.tableCell}>Item</TableCell>
                                    <TableCell className={classes.tableCell}>Price</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow key={item}>
                                    <TableCell className={classes.tableCell} component="th" scope="row">
                                        {item + 1}
                                    </TableCell>
                                    <TableCell className={classes.tableCell} component="th" scope="row">
                                        {row.item}
                                    </TableCell>
                                    <TableCell className={classes.tableCell} component="th" scope="row">
                                        {row.price}
                                    </TableCell>

                                </TableRow>
                            </TableBody>
                        </div>

                    ))
                )}

            </Table>
        </Card>
    );
}


export default Items;