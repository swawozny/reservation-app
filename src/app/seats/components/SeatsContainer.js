import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Button, Col, Layout, Row} from 'antd';
import {getAllSeats} from "../duck/operations";
import {buttonsList} from './buttonsList';
import {reservationActions} from '../../reservations/duck/actions'

const {Content} = Layout;

const getSeat = (seats, x, y) => {
    const seat = seats.list.find(e => e.cords.x === x && e.cords.y === y)
    return seat ? seat : false
};

const getRowsNumber = (seats) => {
    return seats.list.length > 1 ? seats.list.reduce((p,c) => p.cords.x > c.cords.x ? p : c).cords.x : 0
};

const getColumnsNumber = (seats) => {
    return seats.list.length > 1 ? seats.list.reduce((p,c) => p.cords.y > c.cords.y ? p : c).cords.y : 0
};

const isReserved = (reservations, seat) => {
    const reservation = reservations.list.find(reservation => reservation.id === seat.id)
    return reservation ? true : false
};


const SeatsContainer = ({seats, reservations, getAllSeats, reserveSeat, removeReservation}) => {
    useEffect(() => { getAllSeats() }, [getAllSeats])
    const rowsNumber = getRowsNumber(seats);
    const columnsNumber = getColumnsNumber(seats);

    const handleReservation = (seat, reserve) => { reserve ? reserveSeat(seat) : removeReservation(seat) }
    let seatsCounter = 1;

    return (
        <div>
        <div className="site-layout-content">
            {Array.apply(null, {length: rowsNumber+1}).map((e, j) => (
                <Button.Group style={{marginTop: '10px', overflow: 'scroll', alignItems: 'center', textAlign: 'center'}}>
                    {Array.apply(null, {length: columnsNumber+1}).map((e, i) => (
                        getSeat(seats, j, i) !== false ?
                            <Button
                                    style={{marginRight: '10px', height: '35px', width: '70px'}}
                                    disabled={getSeat(seats,j,i).reserved}
                                    size="large"
                                    type={isReserved(reservations, getSeat(seats, j,i)) === true ? "danger" : "primary"}
                                    onClick={() => handleReservation(getSeat(seats,j,i), !isReserved(reservations, getSeat(seats, j,i)))}
                            >
                                {seatsCounter++}
                            </Button> :
                            <div style={{marginRight: '10px', height: '35px', width: '70px'}}></div>
                        ))}
                </Button.Group>
            ))}
        </div>
            <Content style={{paddingTop: "20px"}}>
                <div className="site-layout-content">
                    <Row type="flex" justify="space-between" align="middle">
                        {buttonsList.map( (e, k) => {
                            return (
                                <Col xs={24} md={12} xl={6}>
                                    <Button type={e.type} style={e.style} disabled={e.disabled} size="large">
                                        {e.text}
                                    </Button>
                                    <p>{e.upperText}</p>
                                </Col>
                            )})
                        }
                    </Row>
                </div>
            </Content>
        </div>
    )
};

const mapStateToProps = state => ({
    seats: state.seats,
    reservations: state.reservations
});

const mapDispatchToProps = dispatch => ({
    getAllSeats: () => dispatch(getAllSeats()),
    reserveSeat: (item) => dispatch(reservationActions.add(item)),
    removeReservation: (id) => dispatch(reservationActions.remove(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatsContainer);