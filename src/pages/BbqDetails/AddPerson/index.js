import React from 'react'
import {Form} from './styles';
import Input from '../../../components/Input/index';

function index() {
    return (
        <Form>
            <Input 
                type="text" 
                placeholder="Nome da pessoa" 
                name="name"
                required
            />
            <Input 
                type="number" 
                placeholder="Valor" 
                name="contribution"
                required
            />
        </Form>
    )
}

export default index
