import types from './types';

const INITIAL_STATE = {
    listName: 'reservations',
    list: [],
    confirmed: false
};

const reservationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.RESET_RESERVATIONS:
            return {
                ...state, list: []
            }
        case types.ADD_RESERVATION:
            return {
                ...state, list: [...state.list, action.item]
            }
        case types.REMOVE_RESERVATION:
            return {
                ...state,
                list: state.list.filter(item => {
                  return item !== action.item
                }),
            }
        case types.CONFIRM_RESERVATION:
            return {
                ...state,
                confirmed: action.value
            }
        default:
            return state
    }
};

export default reservationReducer;