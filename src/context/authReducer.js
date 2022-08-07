import {DELETE_USER, REGISTER_USER, UPDATE_USER} from './authActions.types';

export default (state, action)=> {
    switch (action.type) {
        case REGISTER_USER:
            return [...state, action.payload];
        case DELETE_USER:
            return state.filter(user => user.id !== action.payload);
        case UPDATE_USER:
            return state.map((user, index) => {
                if (user.id === action.payload.id) {
                    return {...action.payload};
                }
                console.log(state)
                return state;
            });
        default:
           return state;
    }
};