import React, { useState } from 'react';
import styled from 'styled-components';

const CoolForm = styled.form`
  text-align: center;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 4px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

const CoolButton = styled.button`
  font-weight: bold;
  margin: 20px;
  padding: 5px 20px;
  border-radius: 6px;
`;


function Login(props) {
  const [user, setUser] = useState({ username: "", password: ""});
  const [isRegister, setIsRegister] = useState(false);

  const handleChange = event => {
    console.log(user, "userbefore");
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.password);
  }

  return (
    <div className="Login">
      {console.log(user, "userafter")}
      <h1>{isRegister ? 'Register' : 'Login'}</h1>
      <CoolForm onSubmit={event => handleSubmit(event)}>
        <label>
         Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
          </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={event => handleChange(event)}
          />
        </label>
        <CoolButton>{isRegister ? 'Register' : 'Login'}</CoolButton>
      </CoolForm>
    </div>
  );
}

export default Login;
