import types from './types';

const reset = item => ({
    type: types.RESET_SEATS, item
});

export default {
    reset,
};