import types from './types';

const reset = items => ({
    type: types.RESET_RESERVATIONS, items
});

const add = item => ({
    type: types.ADD_RESERVATION, item
});

const remove = item => ({
    type: types.REMOVE_RESERVATION, item
});

export const reservationActions = {
    reset,
    add,
    remove
};

export default reservationActions;