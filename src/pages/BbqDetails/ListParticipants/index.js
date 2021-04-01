import React from 'react'
import {Container, Label, Checkbox, Value} from './styles';

function index() {
    return (
        <Container>
            <Label>
                <Checkbox 
                    type="checkbox" value="person" 
                />
                Teste
            </Label>
            <Value>R$12,00</Value>
        </Container>
    )
}

export default index
