import {createStore} from 'redux';

const initialState = {
    numberId: 1,
    barbecue: [
        {
            id:0,
            date: '04-03-2021',
            title: 'Níver Biel',
            description: 'Churras regado à muita cachaça e tals',
            numberParticipants: 2,
            receivedMoney: 20,
            withDrink: 20,
            noDrink: 10,
            participants: 
                [
                    {
                        name: 'Gabrielle Azevedo',
                        valuePayment: 20,
                        payed: true,
                    },
                    {
                        name: 'Pedro Henrique',
                        valuePayment: 20,
                        payed: false,
                    }
                ]
        },
        {
            id:1,
            date: '07-03-2021',
            title: 'Níver Gabi',
            description: 'Churras regado à muita cachaça e tals',
            numberParticipants: 2,
            receivedMoney: 20,
            withDrink: 20,
            noDrink: 10,
            participants: 
                [
                    {
                        name: 'Gabrielle Azevedo',
                        valuePayment: 20,
                        payed: true,
                    },
                    {
                        name: 'Pedro Henrique',
                        valuePayment: 20,
                        payed: false,
                    }
                ]
        },
        
    ],
}

function reducer(state = initialState, action){
    switch(action.type) {
        case 'Add_Barbacue':
            return { ...state, barbacue: [...state.barbacue, action.title] };
        default:
            return state;
    } 
}

const store = createStore(reducer);

export default store;