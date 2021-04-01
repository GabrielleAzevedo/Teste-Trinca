import React from 'react';
import {Header, PatternBBq, Title, FadePattern} from './styles';

import pattern from '../../assets/bbqPattern.svg';


function index() {
    return (
        <Header>
            <PatternBBq src={pattern} alt="Padrão Churrasco"  />
            <Title>
                Agenda de Churras
            </Title>
            <FadePattern />
        </Header>
    )
}

export default index
