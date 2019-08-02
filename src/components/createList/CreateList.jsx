import React, { useContext, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Items from './Items';
import AddItem from './AddItem';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { pink } from '@material-ui/core/colors';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { useSelector } from 'react-redux';
import { ActionsContext } from '../../contexts/ActionsContext';

const useStyles = makeStyles(theme => ({
  card: {
    color: 'white',
    minWidth: 275,
    width: 500,
    backgroundColor: '#FD7272',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '4px',
  },
  tableCell: {
    color: 'white',
  },
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: theme.backgroundColor,
    height: 50,
    width: '100%',
    '&:hover': {
      backgroundColor: theme.background,
    },
  },
}))(Button);

const themeBtn = {
  backgroundColor: '#FC427B',
  background: '#fc2363',
};

function CreateList(props) {
  const classes = useStyles();
  const { shoppingActions: { fetchShoppingList, addShoppingItem, deleteShoppingItem } } = useContext(ActionsContext);
  const list = useSelector(state => state.shopping.list);
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(list.length > 0);

  useEffect(() => {
    fetchShoppingList(props.match.params.id);
  }, []);

  useEffect(() => {
    setItems(list);
  }, [list]);

  const addItemToList = item => {
    addShoppingItem(item);
    // fetchShoppingList(item.party_id);
    // setItems([...items, item]);
    console.log('Updated list: ', items);
  };
  const deleteItemFromList = item => {
    console.log('delete - ', item);
    const localItems = [...items];
    const indexOfItem = items.indexOf(item);
    localItems.splice(indexOfItem, 1);
    setItems(localItems);
    console.log('Updated list: ', items);
  };

  const changeStatus = status => {
    setStatus(status);
  };


  return (
    <div className={classes.card}>

      <Items status={status} deleteItemFromList={deleteItemFromList} items={items}/>


      {console.log('status: ', status)}
      {status === false && (
        <AddItem addItemToList={addItemToList}/>
      )}

      {status === true && (
        <ThemeProvider theme={themeBtn}>
          <ColorButton onClick={() => changeStatus(!status)}>Edit list</ColorButton>
        </ThemeProvider>
      )}
      {status === false && (
        <ThemeProvider theme={themeBtn}>
          <ColorButton onClick={() => changeStatus(!status)}>Done editing</ColorButton>
        </ThemeProvider>
      )}

    </div>
  );
}


export default withRouter(CreateList);