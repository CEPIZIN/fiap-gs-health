import React from 'react';
//import { useEffect } from 'react';
import './Style.scss';
import Input from '../../../components/input/Input';
import MiniButton from '../../../components/minButton/minButton'; 
import ViewHeader from '../../../components/header/header'
import BigButton from '../../../components/button/bigButton';

// Criar nova div de container com row
// Anexar Button e Paragrafo

// H1, H2, H3, H4, H5, H6
// P


export default function LoginView() {
    return (
        <div className="container">

            <section className='containerfirst'>

            { /* Start ContainerHead */}
            <ViewHeader/>
            { /* End ContainerHead */}

            <MiniButton title ={"Registrar >"}/>

            { /* Start Center Forms */}
                <div className='containerforms'>
                    <Input
                        title={"E-mail"}
                        placeholder={"Digite seu e-mail"}
                    />

                    <Input
                        title={"Senha"}
                        placeholder={"Digite sua senha"}
                    />
                <BigButton title={"Entrar"}/>
                </div>
            { /* End Center Forms */}
            </section>
            <section className='containersecond'>
                
            </section>
        </div>
    );
}
