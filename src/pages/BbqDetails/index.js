import React from 'react';
import {Container, Card, List} from './styles';
import Head from './BbqDetailsHeader/index';
import AddPerson from './AddPerson/index';
import ItemList from './ListParticipants/index';

import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

function Index() {

    let { id } = useParams();
    const barbecue = useSelector(state => state.barbecue);
    const bbqId = barbecue[id]; 


    const tempParticipants = bbqId.participants;

    return (
        <Container>
            <Card >
                
                <Head  dataBbq={bbqId}/> 
                <AddPerson />
                <List> 
                    {tempParticipants.map(participants =>
                        <ItemList key={participants.name} dadosParticipants={participants}  />
                    )}
                </List>
            </Card>
        </Container>
    );
}

export default Index
