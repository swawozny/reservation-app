import types from './types';

const INITIAL_STATE = {
    listName: 'Seats',
    list: [
        {
            "id": "s07",
            "cords": {
                "x": 0,
                "y": 7
            },
            "reserved": false
        },
        {
            "id": "s08",
            "cords": {
                "x": 0,
                "y": 8
            },
            "reserved": true
        },
        {
            "id": "s09",
            "cords": {
                "x": 0,
                "y": 9
            },
            "reserved": true
        }
    ]
};

const seatsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case types.RESET_SEATS:
            return {
                ...state, list: []
            }
        default:
            return state
    }
};

export default seatsReducer;