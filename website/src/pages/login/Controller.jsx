import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginView from './View';
import json from '../../database/data.json';

export default function LoginController() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const auth = async (email, password) => {
    try {
      const response = await fetch('http://localhost:3001/users?email=' + email + '&password=' + password);
      const data = await response.json();
  
      if (data.length === 0) {
        alert('Algo está errado!');
        return false;
      }
  
      navigate('/home');
      alert('Sucesso! Logado com sucesso');
      return true;
    } catch (error) {
      console.error('Erro ao autenticar:', error);
      return false;
    }
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      alert('Preencha todos os campos.');
    } else {
      const isAuthenticated = auth(email, password);
      setAuthenticated(isAuthenticated);
    }
  };

  return (
    <LoginView
      email={email}
      password={password}
      handlerEmail={handlerEmail}
      handlerPassword={handlerPassword}
      handleSubmit={handleSubmit}
      authenticated={authenticated}
    />
  );
}
