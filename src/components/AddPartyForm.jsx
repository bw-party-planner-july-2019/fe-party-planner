import React, {useState, useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {ActionsContext} from '../contexts/ActionsContext';

const TempStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
`;

const AddPartyForm = props => {
  const userId = useSelector(state=>state.auth.user.userID);
  const {partyActions: {addParty}} = useContext(ActionsContext);
  const [values, setValues] = useState({
    party_name: '',
    date: Date.now(),
    n_of_guests: 0,
    theme: '',
    budget: 0,
    user_id: userId
  })

  const handleChange = e => setValues({...values, [e.target.name]: e.target.value});

  const handleSubmit = e => {
    e.preventDefault();
    addParty(values);
    props.history.push('/dashboard')
  }

  return (
      <TempStyle>
        <form onSubmit={handleSubmit}>
          <TextField name='party_name' value={values.party_name} label='Name of Party' onChange={handleChange} />
          <TextField name='n_of_guests' value={values.n_of_guests} label='Number of Guests' onChange={handleChange} />
          <TextField name='theme' value={values.theme} label='Theme of the Party' onChange={handleChange} />
          <TextField name='budget' value={values.budget} label='Budget for the Party' onChange={handleChange} />
          <TextField name='date' type='date' value={values.date} label='Date of the Party' onChange={handleChange} />
          <Button color='secondary' type='submit'>Submit</Button>
        </form>
      </TempStyle>
  );
};

export default AddPartyForm;
