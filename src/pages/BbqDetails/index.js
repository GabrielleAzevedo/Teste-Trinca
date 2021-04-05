import React from 'react';
import {Container, Card, Form,  Select, Button, Option, List, ContainerCheckbox, Label, Checkbox, Value} from './styles';
import Head from './BbqDetailsHeader/index';
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

    const payed = bbqId.participants.payed;


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
        
        dispatch(
            { 
                type: 'ADD_PARTICIPANT', 
                barbecue:barb, 
            }
        );
        nameParticipant.reset();
        return history(`/detalhe/${id}`);
     
    }

   
   function handleClick(element) {
        let bbq = barbecue[id];
        const indexName = bbq.participants.indexOf(element);
        const personPayed = bbq.participants[indexName].payed;
        const personValuePayment = bbq.participants[indexName].valuePayment;
        bbq.participants[indexName].payed = !personPayed;

        
        let money = bbq.receivedMoney;
        
        
        if(personPayed===true){
            money -= +personValuePayment;
        }else{
            money += +personValuePayment;
        }   

        bbq.receivedMoney = money;
        


        dispatch(
            { 
                type: 'SET_PARTICIPANT_PAYMENT', 
                barbecue:bbq, 
            }
        );
        
        console.log(bbq.receivedMoney);
        
        return history(`/detalhe/${id}`);
        
        
   }

    return (
        <Container>
            <Card>      
                <Head dataBbq={bbqId}/>              
                
                <Form onSubmit={handleSubmit} >
                    
                        <Input 
                            type="text" 
                            placeholder="Nome da pessoa"                                 name="nameParticipant"
                            required
                            {...nameParticipant}
                        />
                        <Select value={select} onChange={({target}) => setSelect(target.value)}>
                            <Option value={bbqId.withDrink}>Com bebida (R${bbqId.withDrink})</Option>
                            <Option value={bbqId.noDrink}>Sem bebida (R${bbqId.noDrink})</Option>
                            {/* <Option value="otherValue">Outro</Option> */}
                        </Select>
                    
                    <Button>Add</Button> 
                </Form>
                
                <List> 
                    {tempParticipants.map(participants => 
                        <ContainerCheckbox key={participants.name} >
                            <Label dataPayment={participants.payed} >
                                <Checkbox onClick={() => handleClick(participants)}
                                    type="checkbox" value="person" checked={payed}
                                />
                                {participants.name}
                            </Label>
                            <Value dataValue={participants.payed}>R${participants.valuePayment}</Value>
                        </ContainerCheckbox>
                    )}
                </List>
            </Card>
        </Container>
    );
}

export default Index
