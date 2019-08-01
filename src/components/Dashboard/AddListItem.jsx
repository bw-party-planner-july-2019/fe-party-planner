import React, { useContext, useEffect, useState } from 'react';
import { ActionsContext } from '../../contexts/ActionsContext';
import TextField from '@material-ui/core/TextField';

const AddListItem = (props) => {
  // Shop = True, Todo = False
  const [mode, setMode] = useState(false);
  const [values, setValues] = useState({});
  const { shoppingActions: { addShoppingList } } = useContext(ActionsContext);
  useEffect(() => {
    if (props.mode === 'shopping') {
      setMode(true);
      setValues({ item: '', purchased: false, price: '', party_id: Number(props.match.params.id) });
    } else {
      setMode(false);
      setValues({ item: '', completed: false, party_id: Number(props.match.params.id) });
    }
  }, []);
  const handleChange = e => setValues({ ...values, [e.target.name]: e.target.value });
  const handleCheckChange = e => setValues({ ...values, [e.target.name]: e.target.checked });

  const handleSubmit = e => {
    e.preventDefault();
    mode && addShoppingList(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField />
      <TextField />

    </form>
  );
};

export default AddListItem;
