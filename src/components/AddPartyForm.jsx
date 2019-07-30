import React from 'react';
import {Field, Form, withFormik} from 'formik';
import TextField from '@material-ui/core/TextField';
import {DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {useForm} from '../hooks/useForm';
import MomentUtils from '@date-io/moment';
import {useSelector} from 'react-redux';

const TempStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
`;

const AddPartyForm = () => {
  const userId = useSelector(state=>state.auth.user.userID);
  const [formValues, changeHandler, submitHandler] = useForm({
    party_name: '',
    date: Date.now(),
    n_of_guests: 0,
    theme: '',
    budget: 0,
    user_id: userId
  }, submit);

  function submit() {
    submitHandler(formValues);
  }
  //GIT FTW
  return (
      <TempStyle>
        <form onSubmit={submit}>
          <TextField name='party_name' value={formValues.party_name} label='Name of Party' onChange={changeHandler} />
          <TextField name='n_of_guests' value={formValues.n_of_guests} label='Number of Guests' onChange={changeHandler} />
          <TextField name='theme' value={formValues.theme} label='Theme of the Party' onChange={changeHandler} />
          <TextField name='budget' value={formValues.budget} label='Budget for the Party' onChange={changeHandler} />
          <TextField name='date' type='date' value={formValues.date} label='Date of the Party' onChange={changeHandler} />
          <Button color='secondary' type='submit'>Submit</Button>
        </form>
      </TempStyle>
  );
};

export default AddPartyForm;
