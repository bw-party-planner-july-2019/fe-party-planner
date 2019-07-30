import {useState} from 'react';

export const useForm = (initialValues, callback) => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = e => {
    e.preventDefault();
    callback();
    setValues(initialValues);
  };

  const handleChange = e => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  return [values, handleChange, handleSubmit];
};