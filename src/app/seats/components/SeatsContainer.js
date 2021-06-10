import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Badge, Button, Col, Layout, Row} from 'antd';
import {getAllSeats} from "../duck/operations";
import {reservationActions} from "../../reservations/duck/actions";
import {legendItems} from './LegendItems';
import SeatContainer from "./SeatContainer";
import ReservationContainer from "../../reservations/components/ReservationContainer";

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

const SeatsContainer = ({seats, getAllSeats, reservationsLength, reservationConfirm, confirm}) => {
    useEffect(() => { getAllSeats() }, [getAllSeats]);
    const rowsNumber = getRowsNumber(seats);
    const columnsNumber = getColumnsNumber(seats);
    let seatsCounter = 1;

    if(reservationConfirm === false){
    return (
        <div>
        <div className="site-layout-content">
            {Array.apply(null, {length: rowsNumber+1}).map((e, j) => (
                <Button.Group style={{marginTop: '10px', overflow: 'scroll', alignItems: 'center', textAlign: 'center'}}>
                    {Array.apply(null, {length: columnsNumber+1}).map((e, i) => (
                        <SeatContainer
                            seat={getSeat(seats,j,i)}
                            seatsCounter={getSeat(seats,j,i) ? seatsCounter++ : seatsCounter}
                            ></SeatContainer>
                    ))}
                </Button.Group>
            ))}
        </div>
            <Content style={{paddingTop: "20px"}}>
                <div className="site-layout-content">
                    <Row type="flex" justify="space-between" align="middle">
                        {legendItems.map( (e, k) => {
                            return (
                                <Col xs={24} md={12} xl={6}>
                                        <Button key={k} type={e.type} style={e.style} disabled={e.disabled} size="large">
                                            {e.buttonText}
                                        </Button>
                                    <p>{e.legendText}</p>
                                </Col>
                            )})
                        }
                        <Col xs={24} md={12} xl={6}>
                                <Badge count={reservationsLength}>
                                    <Button type="primary" style={{height: '50px', width: '150px'}} onClick={() => confirm(true)} disabled={!reservationsLength} size="large">
                                        Zarezerwuj
                                    </Button>
                                </Badge>
                        </Col>
                    </Row>
                </div>
            </Content>
        </div>
    )}
    else {
        return (
            <ReservationContainer></ReservationContainer>
        )
    }
};

const mapStateToProps = state => ({
    seats: state.seats,
    reservationsLength: state.reservations.list.length,
    reservationConfirm: state.reservations.confirmed
});

const mapDispatchToProps = dispatch => ({
    getAllSeats: () => dispatch(getAllSeats()),
    confirm: (value) => dispatch(reservationActions.confirm(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SeatsContainer);