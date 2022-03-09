import actions from './actions'

export const fetchSeats = async () => {
    const response = await fetch(process.env.REACT_APP_API_URL, { method: 'GET' }).catch(
        error => {
            throw new Error("API seems to be down")
        }
    )
    const json = await response.json()
    return json
};

export const getAllSeats = () =>
    async (dispatch) => {
        const seats = await fetchSeats()
        dispatch(actions.reset())
        seats.map(seat => dispatch(actions.add(seat)))
};