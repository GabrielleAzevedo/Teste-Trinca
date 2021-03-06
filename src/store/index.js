import {createStore} from 'redux';

const initialState = {
    barbecue: [
        {
            id:0,
            date: '2021-04-03',
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
            date: '2021-03-07',
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
                        valuePayment: 10,
                        payed: false,
                    }
                ]
        },
        
    ],
}

function reducer(state = initialState, action){
    switch(action.type) {
        case 'ADD_BARBECUE':
            return { 
                ...state, 
                barbecue: [...state.barbecue, {
                    ...action,
                 }]      
            };
        case 'ADD_PARTICIPANT':
            return{
                ...state,
                barbecue: action.barbecue,
                numberId: action.numberId,
            }
        case 'SET_PARTICIPANT_PAYMENT':
            return{
                ...state, 
                barbecue: [...state.barbecue, {
                    ...action,
                 }] 
            }
        case 'SET_ID_BBQ':
            return{
                ...state, 
                numberId: [...state.numberId, {
                    ...action,
                 }]
            }
        default:
            return state;
    } 
}

const store = createStore(reducer);

export default store;