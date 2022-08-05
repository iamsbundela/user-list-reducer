import {REGISTER_USER} from './authActions.types';

export default (state, action)=> {
    console.log(state);
    switch (action.type) {
        case REGISTER_USER:
            return [...state, action.payload];   
        default:
           return state;
    }
};