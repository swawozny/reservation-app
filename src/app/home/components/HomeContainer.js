import React, {useEffect, useState} from "react";
import {Button, Row, Col, Checkbox, Form, InputNumber} from "antd";
import {connect} from "react-redux";
import {reservationActions} from "../../reservations/duck/actions";
import {getAllSeats} from "../../seats/duck/operations";
import SeatsContainer from "../../seats/components/SeatsContainer";
import './home.css'

const HomeContainer = ({seats, reservations, reserveSeat, getAllSeats}) => {
    const [state, setState] = useState(false)
    const [error, setError] = useState("")


    useEffect(() => {
        getAllSeats()
    }, [getAllSeats]);

    const [form] = Form.useForm();

    const onInputChange = (event) => {
        form.setFieldsValue({
            seatsNumber: event
        });
    };

    const onCheckBoxChange = (event) => {
        form.setFieldsValue({
            closeTogether: event.target.checked
        });
    };

    const getSeat = (seats, x, y) => {
        const seat = seats.find(e => e.cords.x === x && e.cords.y === y)
        return seat ? seat : false
    };

    const getRowsNumber = (seats) => {
        return seats.length > 1 ? seats.reduce((p,c) => p.cords.x > c.cords.x ? p : c).cords.x : 0
    };

    const getColumnsNumber = (seats) => {
        return seats.length > 1 ? seats.reduce((p,c) => p.cords.y > c.cords.y ? p : c).cords.y : 0
    };

    const getSeatsInRow = (seats, rowNumber) => {
        let selectedSeats = [];
        let maxSelectedSeats = []
        Array.apply(null, {length: getColumnsNumber(seats)+1}).forEach((e, j) => {
            const seat = getSeat(seats,rowNumber, j);
            console.log(seat)
            if(seat) {
                selectedSeats.push(seat);
                if(maxSelectedSeats.length < selectedSeats.length) {
                    maxSelectedSeats = selectedSeats;
                }
            }
            else {
                selectedSeats = []
            }
        })
        return maxSelectedSeats;
    }

    const onFinish = (values) => {
        let notReservedSeats = []
        seats.list.filter(e => e.reserved === false).map(e => notReservedSeats.push(e))

        let seatsToReserved = []

        if(values.closeTogether) {
            Array.apply(null, {length: getRowsNumber(notReservedSeats)+1}).forEach((e, j) => {
                let seatsInRow = getSeatsInRow(notReservedSeats, j);
                if(seatsInRow.length >= values.seatsNumber){
                    seatsToReserved = seatsInRow;
                }
            })
            if(seatsToReserved.length >= values.seatsNumber){
                Array.apply(null, {length: values.seatsNumber}).forEach((e, j) => {
                    reserveSeat(seatsToReserved[j])
                })
                setState(true)
            }
        }
        else {
            seatsToReserved = notReservedSeats;
            Array.apply(null, {length: values.seatsNumber}).forEach((e, j) => {
                reserveSeat(notReservedSeats[j])
            })
            setState(true)

        }
        setError("Nie udało się znaleźć tyle miejsc obok siebie. Zmniejsz liczbę lub odznacz opcję.")
    };

    const availableSeatsNumber = seats.list.filter(e => e.reserved === false).length;

    if(state === false) {
        return (
            <Row type="flex" justify="center" align="middle">
                <Col>
                    <Form form={form}
                          initialValues={{seatsNumber: 1, closeTogether: false}}
                          name="basic"
                          className="home-form"
                          style={{padding: '25px'}}
                          onFinish={onFinish}
                    >
                        <Form.Item
                            name="seatsNumber"
                            style={{alignItems: "center"}}
                            label="Liczba Miejsc"
                            rules={[{required: true}]}
                        >
                            <InputNumber onChange={onInputChange} min={1} max={availableSeatsNumber}
                                         size="large"
                                         className="home-form-input"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox onChange={onCheckBoxChange}>
                                <p>Czy miejsca mają być obok siebie?</p>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item
                            name="closeTogether"
                            validateStatus="error"
                            help={error}
                        >
                            <Button type="primary" size="large" htmlType="submit" className="home-form-button">
                                Wybierz miejsca
                            </Button>

                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )}
    else {
        return (
            <SeatsContainer></SeatsContainer>
        )}
};

const mapStateToProps = state => ({
    seats: state.seats,
    reservations: state.reservations
});

const mapDispatchToProps = dispatch => ({
    reserveSeat: (item) => dispatch(reservationActions.add(item)),
    getAllSeats: () => dispatch(getAllSeats())
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);