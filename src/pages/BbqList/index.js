import React from 'react'
import Card from '../../components/Card/index'
import {Container, Cards, CardNewBbq, Circle, ChurrasIcon, TextNewBbq} from './styles';
import bbq from '../../assets/icons/bbq.svg';

import {Link} from 'react-router-dom'

import { useSelector } from 'react-redux';


function Index() {

    const barbecue = useSelector(state => state.barbecue);

    return (
        <Container>
            <Cards>
                {barbecue.map(barbecue =>
                    <Link to={`/detalhe/${barbecue.id}`}> <Card key={barbecue.title} dadosbbq={barbecue} />
                    </Link>
                    
                )}
                
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

export default Index
