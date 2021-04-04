import React from 'react'
import {Container, Info, Date, Title, Description, IconsDetail, IconInfo, Icon, DataIcon} from './styles';
import people from '../../../assets/icons/people.svg';
import money from '../../../assets/icons/money.svg';


function Index(props) {

    const headBbq = props.dataBbq;
    

    return (
        <Container>
            <Info>
                <Date>{headBbq.date}</Date>
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
