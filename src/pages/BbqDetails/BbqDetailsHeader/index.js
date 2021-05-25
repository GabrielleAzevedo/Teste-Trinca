import React from 'react'
import {Container, Info, Date, Title, Description, IconsDetail, IconInfo, Icon, DataIcon} from './styles';
import people from '../../../assets/icons/people.svg';
import money from '../../../assets/icons/money.svg';


function Index(props) {

    const headBbq = props.dataBbq;
    
    let date = props.dataBbq.date;
    const day = date.split('-')[2];
    const month = date.split('-')[1];
    date = `${day}/${month}`;
    
    
    return (
        <Container>
            <Info>
                <Date>{date}</Date>
                <Title>{headBbq.title}</Title>
                <Description>
                    {headBbq.description}     
                </Description>
            </Info>
            <IconsDetail>
                <IconInfo>
                    <Icon src={people} alt="Ícone Pessoas" />
                    <DataIcon>{headBbq.numberParticipants}</DataIcon> 
                </IconInfo>
                <IconInfo>
                    <Icon src={money} alt="Ícone Moeda" /> 
                    <DataIcon> R${headBbq.receivedMoney} </DataIcon> 
                </IconInfo>
            </IconsDetail>
        </Container>
    )
}

export default Index
