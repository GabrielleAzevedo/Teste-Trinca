import React from 'react'
import {Container, Label, Checkbox, Value} from './styles';

function Index(props) {

    const participants = props.dadosParticipants;

    return (
        <Container>
            <Label>
                <Checkbox 
                    type="checkbox" value="person" 
                />
                {participants.name}
            </Label>
            <Value>R${participants.valuePayment}</Value>
        </Container>
    )
}

export default Index