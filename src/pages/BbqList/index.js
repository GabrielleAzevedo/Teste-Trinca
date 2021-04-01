import React from 'react'
import Card from '../../components/Card/index'
import {Container, Cards, CardNewBbq, Circle, ChurrasIcon, TextNewBbq} from './styles';
import bbq from '../../assets/icons/bbq.svg';


function index() {
    return (
        <Container>
            <Cards>
                <Card />
                <Card />
                <CardNewBbq>
                    <Circle>
                        <ChurrasIcon src={bbq} alt="Ícone Churrasco" />
                    </Circle>
                    <TextNewBbq>Adicionar Churras</TextNewBbq>
                </CardNewBbq>
            </Cards>
            
        </Container>
    )
}

export default index
