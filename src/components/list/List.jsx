import React, {useContext, useEffect, useState} from 'react';
import {withRouter} from 'react-router-dom';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import {pink} from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useSelector} from 'react-redux';
import {ActionsContext} from '../../contexts/ActionsContext';

const StyledCheckbox = withStyles({
  root: {
    color: pink[50],
    '&$checked': {
      color: pink[50],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  card: {
    color: 'white',
    minWidth: 275,
    width: 300,
    backgroundColor: '#B33771',
  },
  whiteStyle: {
    color: pink[50],
  },
}));

function DisplayList(props) {
  console.log(props);
  const list = useSelector(state => state.shopping.list);
  const {shoppingActions: {fetchShoppingList}} = useContext(ActionsContext);
  // const list = [
  //     {id: 1, party_id: 1, item: 'balloons', purchased: false, price: 5},
  //     {id: 2, party_id: 1, item: 'drinks', purchased: false, price: 55},
  //     {id: 3, party_id: 1, item: 'cake', purchased: false, price: 20},
  //     {id: 4, party_id: 2, item: 'juice', purchased: false, price: 5},
  //     {id: 5, party_id: 2, item: 'cups', purchased: false, price: 10},
  //     {id: 6, party_id: 2, item: 'cookies', purchased: false, price: 15},
  //     {id: 7, party_id: 3, item: 'decorations', purchased: false, price: 25},
  //     {id: 8, party_id: 3, item: 'candy', purchased: false, price: 20},
  //     {id: 9, party_id: 3, item: 'music', purchased: false, price: 10},
  // ];
  const classes = useStyles();
  const listOfItems = list.filter(item => item.party_id === list.party_id);
  const [checked, setChecked] = useState([0]);

  useEffect(() => {
    if (props.mode === 'shopping') props.match.params &&
    props.match.params.id && fetchShoppingList(props.match.params.id);
  }, []);

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
      <div>
        {props.mode === 'shopping' && <h1>Shopping List</h1>}
        {props.mode === 'todos' && <h1>Todo List</h1>}
        <Card className={classes.card}>
          <List className={classes.list}>
            {console.log('checked items ', checked)}
            {listOfItems.map(item => {
              return (
                  <ListItem key={item.id} role={undefined} dense button
                            onClick={handleToggle(item)}>
                    <ListItemIcon>
                      <FormControlLabel
                          control={
                            <StyledCheckbox
                                edge="start"
                                checked={checked.indexOf(item) !== -1}
                                value={item.party_id}
                                disableRipple

                                inputProps={{'aria-labelledby': `${item.item} ${item.id}`}}
                            />
                          }/>
                    </ListItemIcon>
                    <ListItemText id={`${item.item} ${item.id}`}
                                  primary={item.item}/>
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="comments">
                        <EditIcon className={classes.whiteStyle}/>
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
              );
            })}
          </List>
        </Card>
      </div>

  );

}

export default withRouter(DisplayList);