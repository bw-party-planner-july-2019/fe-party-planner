import React from 'react';

function Login() {
  return (
    <div className="Login">
      <form>
        <label>
        Username:
          <input type="text" />
          </label>
        <label>
          Password:
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default Login;
