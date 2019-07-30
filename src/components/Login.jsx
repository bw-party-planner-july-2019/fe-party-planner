import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import {ActionsContext} from '../contexts/ActionsContext';
import {useSelector} from 'react-redux';
import jwt_decode from 'jwt-decode'

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
  const isAuth = useSelector(state=>state.auth.isAuth);
  const [user, setUser] = useState({ username: "", password: ""});
  const [isRegister, setIsRegister] = useState(false);
  const {authActions: {login, register, welcomeBack, logout}} = useContext(ActionsContext);

  useEffect(()=> {
    if (localStorage.getItem('token')) {
      const {exp} = jwt_decode(JSON.parse(localStorage.getItem('token')));
      const currentDate = Date.now() / 1000;
      exp > currentDate ? welcomeBack(localStorage.getItem('token')) : logout();
    }
  }, []);

  useEffect(()=> {
    isAuth && props.history.push('/dashboard')
  },[isAuth])

  useEffect(()=> {
    if (props.location.pathname === '/') {
      setIsRegister(false)
    } else if (props.location.pathname === '/register') {
      setIsRegister(true);
    }
  }, [props.location.pathname]);

  const handleChange = event => {
    console.log(user, "userbefore");
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(user.username);
    console.log(user.password);
    console.log(isRegister);
    if (isRegister) {
      register(user);
    } else {
      login(user);
    }
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
