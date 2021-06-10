import actions from './actions'

const fetchSeats = async () => {
    const response = await fetch('http://localhost:3000/seats', { method: 'GET' })
    const json = await response.json()

    return json
};

export const getAllSeats = () =>
    async (dispatch) => {
        const seats = await fetchSeats()
        dispatch(actions.reset())
        seats.map(seat => dispatch(actions.add(seat)))
    }