import React from 'react';
import {Container, Label, Input} from './styles';

function index({label, name,  ...props}) {
    return (
        <Container>
            <Label htmlFor={name}> {label} </Label>
            <Input id={name} name={name} {...props}/>
        </Container>
    );
}

export default index
