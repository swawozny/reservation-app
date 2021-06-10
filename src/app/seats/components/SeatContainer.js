import {reservationActions} from "../../reservations/duck/actions";
import {connect} from "react-redux";
import {Button} from "antd";
import React from "react";

const isReserved = (reservations, seat) => {
    const reservation = reservations.list.find(reservation => reservation.id === seat.id)
    return reservation ? true : false
};

const SeatContainer = ({seat, seatsCounter, reserveSeat, removeReservation, reservations}) => {
    const handleReservation = (seat, reserve) => { reserve ? reserveSeat(seat) : removeReservation(seat)};

    return (
        seat !== false ?
            <Button
                style={{marginRight: '10px', height: '35px', width: '70px'}}
                disabled={seat.reserved}
                size="large"
                type={isReserved(reservations, seat) === true ? "danger" : "primary"}
                onClick={() => handleReservation(seat, !isReserved(reservations, seat))}
            >
                {seatsCounter}
            </Button>
            :
            <div style={{marginRight: '10px', height: '35px', width: '70px'}}></div>
    )
};

const mapStateToProps = state => ({
    reservations: state.reservations
});

const mapDispatchToProps = dispatch => ({
    reserveSeat: (item) => dispatch(reservationActions.add(item)),
    removeReservation: (item) => dispatch(reservationActions.remove(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatContainer);