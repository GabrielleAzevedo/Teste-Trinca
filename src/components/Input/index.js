import React from 'react';
import {Container, Label, Input} from './styles';

function index({label, type, name, placeholder, value, onChange, ...props}) {
    return (
        <Container>
            <Label htmlFor={name}> {label} </Label>
            <Input 
                id={name} 
                name={name} 
                type={type} 
                placeholder={placeholder} 
                onChange={onChange}
                value={value}
                {...props}
            />
        </Container>
    );
}

export default index
