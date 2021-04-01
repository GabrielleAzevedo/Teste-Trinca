import React from 'react';
import {Button} from './styles';

function index({children, ...props}) {
    return (
        <Button {...props}>
            {children}
        </Button>
    )
}

export default index

