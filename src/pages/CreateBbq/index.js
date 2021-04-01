import React from 'react';
import Input from '../../components/Input/index';
import Textarea from '../../components/Textarea/index';
import Button from '../../components/Button/index';
import {CreateBarbecue, Form} from './styles';
import useForms from '../../Hooks/useForms';


const Index = () => {

    const dateBbq = useForms();
    const titleBbq = useForms();
    console.log(dateBbq.value);

    function handleSubmit(event){
        event.preventDefault();
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
                    // value={loginData.username}
                    // onChange={formChange}
                />
                <Input 
                    label="Título" 
                    type="text" 
                    name="titleBbq"
                    required
                    {...titleBbq}
                    //  value={loginData.username}
                    // onChange={formChange}
                />
                <Textarea 
                    label="Descrição"
                    name="description"
                
                />
                <Input 
                    label="Valor sem bebida" 
                    type="number" 
                    name="nodrink"
                    required
                    //  value={loginData.username}
                    // onChange={formChange}
                />
                <Input 
                    label="Valor com bebida" 
                    type="number" 
                    name="drink"
                    required
                    //  value={loginData.username}
                    // onChange={formChange}
                />
                <Button>Criar Churrasco</Button>
            </Form>
        </CreateBarbecue>
    )
}

export default Index
