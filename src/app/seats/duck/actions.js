import types from './types';

const reset = item => ({
    type: types.RESET_SEATS, item
});

const add = item => ({
    type: types.ADD_SEAT, item
});

const set = items => ({
    type: types.SET_SEATS, items
});

const exportedActions = {
    reset,
    add,
    set
};

export default exportedActions;