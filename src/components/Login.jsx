import React, { useState } from 'react';

function Login(props) {
  const [user, setUser] = useState({ username: "", password: ""});
  const [isRegister, setIsRegister] = useState(false);

  const handleUserChange = event => {
    setUser({ ...user, username: event.target.value });
  };

  const handlePassChange = event => {
    setUser({ ...user, password: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.password);
  }

  return (
    <div className="Login">
      {console.log(user)}
      <h1>{isRegister ? 'Register' : 'Login'}</h1>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
         Username:
          <input
            type="text"
            name="username"
            onChange={event => handleUserChange(event)}
          />
          </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={event => handlePassChange(event)}
          />
        </label>
        <button>{isRegister ? 'Register' : 'Login'}</button>
      </form>
    </div>
  );
}

export default Login;
