import types from './types';

const INITIAL_STATE = {
    listName: 'Seats',
    list: []
};

const seatsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.RESET_SEATS:
            return {
                ...state, list: []
            }
        case types.ADD_SEAT:
            return {
                ...state, list: [...state.list, action.item]
            }
        default:
            return state
    }
};

export default seatsReducer;