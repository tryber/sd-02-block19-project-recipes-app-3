import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Header from './Header';

const onHandleSubmit = (emailValue) => {
  localStorage.setItem('meals-token', '1');
  localStorage.setItem('cocktails-token', '1');
  localStorage.setItem('user', JSON.stringify({ email: emailValue }));
  return true;
};

const regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const Home = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isRedirect, setIsRedirect] = useState(false);
  return (
    <div><h1>Login</h1>
      <div><input
        type="email"
        placeholder="Email"
        data-testid="email-input"
        value={emailValue}
        onChange={({ target }) => setEmailValue(target.value)}
      /></div>
      <div> <input
        type="password"
        placeholder="Senha"
        data-testid="password-input"
        value={passwordValue}
        onChange={({ target }) => setPasswordValue(target.value)}
      /></div>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={!(passwordValue.length > 5 && regexEmail.test(emailValue))}
        onClick={() => setIsRedirect(onHandleSubmit(emailValue))}
      >
        Entrar
        </button>
      {isRedirect && <Redirect to="/receitas/comidas" />}
    </div>
  );
};

export default Home;
