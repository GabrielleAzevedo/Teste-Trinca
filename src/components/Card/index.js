import React from 'react'
import {Card, CardInfo, CardIcons, Date, Title, Description, Icon, Number, DataIcon} from './styles';
import people from '../../assets/icons/people.svg';
import money from '../../assets/icons/money.svg';

function Index(props) {

    const barbecue = props.dadosbbq;

    let date = barbecue.date;
    const day = date.split('-')[2];
    const month = date.split('-')[1];
    date = `${day}/${month}`;

    return (
        <Card>
            <CardInfo>
                <Date>{date}</Date>
                <Title>{barbecue.title}</Title>
                <Description>{barbecue.description}</Description>
            </CardInfo>
            <CardIcons>
                <Number> 
                    <Icon src={people} alt="Ícone Pessoas" /> 
                    <DataIcon> {barbecue.numberParticipants} </DataIcon>
                </Number>
                <Number> 
                    <Icon src={money} alt="Ícone Moeda" /> 
                    <DataIcon> R${barbecue.receivedMoney} </DataIcon>

                </Number>
            </CardIcons>
        </Card>
    )
}

export default Index
