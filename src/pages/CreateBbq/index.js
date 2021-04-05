import React from 'react';
import Input from '../../components/Input/index';
import Textarea from '../../components/Textarea/index';
import Button from '../../components/Button/index';
import {CreateBarbecue, Form} from './styles';
import useForms from '../../Hooks/useForms';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Index = () => {

    const dispatch = useDispatch();

    const history = useNavigate();

    const barbecue = useSelector( state => state.barbecue);

    const dateBbq = useForms();
    const titleBbq = useForms();
    const descriptionBbq = useForms();
    const noDrinkBbq = useForms();
    const drinkBbq = useForms();

    function handleSubmit(event){
        event.preventDefault();

        let lengthBbq = barbecue.length;
        dispatch(
            { 
                type: 'ADD_BARBECUE', 

                id: lengthBbq,
                date: dateBbq.value,
                title: titleBbq.value,
                description: descriptionBbq.value,
                noDrink: noDrinkBbq.value,
                withDrink: drinkBbq.value,
                receivedMoney: 0,
                numberParticipants: 0, 
                participants: [],   
            },
            
        );
        
        
        return history('/');
    }

    return (
        <CreateBarbecue>
            <Form action="" onSubmit={handleSubmit}>
                <Input 
                    label="Data" 
                    type="date" 
                    name="dateBbq"
                    required
                    {...dateBbq}
                />
                <Input 
                    label="Título" 
                    type="text" 
                    name="titleBbq"
                    required
                    {...titleBbq}                   
                />
                <Textarea 
                    label="Descrição"
                    name="descriptionBbq"
                    {...descriptionBbq}                
                />
                <Input 
                    label="Valor sem bebida" 
                    type="number" 
                    name="noDrinkBbq"
                    required
                    {...noDrinkBbq}
                />
                <Input 
                    label="Valor com bebida" 
                    type="number" 
                    name="drinkBbq"
                    required
                    {...drinkBbq}
                />
                <Button>Criar Churrasco</Button>                
            </Form>
        </CreateBarbecue>
    )
}

export default Index
