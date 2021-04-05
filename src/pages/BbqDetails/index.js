import React from 'react';
import {Container, Card, Form, Content, Select, Button, Option, List} from './styles';
import Head from './BbqDetailsHeader/index';
import ItemList from './ListParticipants/index';
import Input from '../../components/Input/index'

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import useForms from '../../Hooks/useForms';
import { useNavigate } from 'react-router-dom';



function Index() {

    let { id } = useParams();
    let barbecue = useSelector(state => state.barbecue);
    const bbqId = barbecue[id];
    
    const dispatch = useDispatch();
    const history = useNavigate();

    const tempParticipants = bbqId.participants;


    let nameParticipant = useForms();
    const [select, setSelect] = React.useState(bbqId.withDrink);

    function handleSubmit(event){
        event.preventDefault();

        let barb = barbecue;
        barb[id].numberParticipants = barb[id].numberParticipants + 1;
        barb[id].participants.push({
            name: nameParticipant.value,
            payed: false,
            valuePayment: select,
        });
        console.log(barb);
        dispatch(
            { 
                type: 'ADD_PARTICIPANT', 
                barbecue:barb, 
            }
        );
        nameParticipant.reset();
        return history(`/detalhe/${id}`);
     
    }

   

    return (
        <Container>
            <Card>      
                <Head dataBbq={bbqId}/>              
                
                    <Form onSubmit={handleSubmit} >
                        <Content>
                            <Input 
                                type="text" 
                                placeholder="Nome da pessoa" 
                                name="nameParticipant"
                                required
                                {...nameParticipant}
                            />
                            <Select value={select} onChange={({target}) => setSelect(target.value)}>
                                <Option value={bbqId.withDrink}>Com bebida (R${bbqId.withDrink})</Option>
                                <Option value={bbqId.noDrink}>Sem bebida (R${bbqId.noDrink})</Option>
                                {/* <Option value="otherValue">Outro</Option> */}
                            </Select>
                        </Content>
                        <Button>Add</Button> 
                    </Form>
                

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
