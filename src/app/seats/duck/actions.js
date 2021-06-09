import types from './types';

const reset = item => ({
    type: types.RESET_SEATS, item
});

const add = item => ({
    type: types.ADD_SEAT, item
});

export default {
    reset,
    add
};