import React from 'react';
import './Style.scss';
import Input from '../../components/input/Input';
import MiniButton from '../../components/minButton/minButton';
import ViewHeader from '../../components/header/header';

export default function LoginView({
  email,
  password,
  handlerEmail,
  handlerPassword,
  handleSubmit,
  authenticated,
}) {
  return (
    <div className="container">
      <section className="containerfirst">
        <ViewHeader />
        <MiniButton title={'Registrar >'} />

        <form className="containerforms" onSubmit={handleSubmit}>
          <Input
            title={'E-mail'}
            placeholder={'Digite seu e-mail'}
            value={email}
            onChange={handlerEmail}
          />
          <Input
            title={'Senha'}
            placeholder={'Digite sua senha'}
            value={password}
            onChange={handlerPassword}
          />

          <input type="submit" className="bigButton" />
        </form>

        {authenticated && (
          <div className="authenticated-message">
            <p>Usuário autenticado com sucesso!</p>
          </div>
        )}
      </section>

      <section className="containersecond"></section>
    </div>
  );
}
