import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const changeHandler = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    console.log(username);
    console.log(password);
  }

  return (
    <div className="Login">
      <h1>{isRegister ? 'Register' : 'Login'}</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
         Username:
          <input type="text" onChange={changeHandler}/>
          </label>
        <label>
          Password:
          <input type="text" onChange={changeHandler}/>
        </label>
        <button>{isRegister ? 'Register' : 'Login'}</button>
      </form>
    </div>
  );
}

export default Login;
