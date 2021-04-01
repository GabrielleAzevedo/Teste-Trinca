import React from 'react'
import {Container, Info, Date, Title, Description, IconsDetail, IconInfo, Icon, DataIcon} from './styles';
import people from '../../../assets/icons/people.svg';
import money from '../../../assets/icons/money.svg';


function index() {
    return (
        <Container>
            <Info>
                <Date>01/12</Date>
                <Title>Niver do Gui</Title>
                <Description>
                    Testando sla o que, pq quero ver como vai ficar e indo ao infinito e além para ver a divisão        
                </Description>
            </Info>
            <IconsDetail>
                <IconInfo>
                    <Icon src={people} alt="Ícone Pessoas" />
                    <DataIcon>12</DataIcon> 
                </IconInfo>
                <IconInfo>
                    <Icon src={money} alt="Ícone Moeda" /> 
                    <DataIcon>R$407</DataIcon> 
                </IconInfo>
            </IconsDetail>
        </Container>
    )
}

export default index
