import React from 'react';
import {Container, Card, List} from './styles';
import Head from './BbqDetailsHeader/index';
import AddPerson from './AddPerson/index';
import ItemList from './ListParticipants/index';


function index() {
    return (
        <Container>
            <Card>
                <Head /> 

                <AddPerson />

                <List> 
                
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                    <ItemList />
                </List>
            </Card>
        </Container>
    );
}

export default index
