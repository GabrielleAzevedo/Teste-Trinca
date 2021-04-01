import React from 'react'
import {Card, CardInfo, CardIcons, Date, Title, Description, Icon, Number, DataIcon} from './styles';
import people from '../../assets/icons/people.svg';
import money from '../../assets/icons/money.svg';


function index() {
    return (
        <Card>
            <CardInfo>
                <Date>25/12</Date>
                <Title>Niver Gabi</Title>
                <Description>Aniversário regado à Churras</Description>
            </CardInfo>
            <CardIcons>
                <Number> 
                    <Icon src={people} alt="Ícone Pessoas" /> 
                    <DataIcon> 12 </DataIcon>
                </Number>
                <Number> 
                    <Icon src={money} alt="Ícone Moeda" /> 
                    <DataIcon> 407 </DataIcon>

                </Number>
            </CardIcons>
        </Card>
    )
}

export default index
