import React, {useEffect, useState} from "react";
import {Button, Row, Col, Checkbox, Form, InputNumber} from "antd";
import {getAllSeats} from "../../seats/duck/operations";
import {connect} from "react-redux";
import {reservationActions} from "../../reservations/duck/actions";
import './home.css'
import SeatsContainer from "../../seats/components/SeatsContainer";

const HomeContainer = ({seats, reservations, reserveSeat, getAllSeats}) => {
    const [state, setState] = useState(false)

    useEffect(() => {
        getAllSeats()
    }, [getAllSeats]);

    const [form] = Form.useForm();

    const onInputChange = (event) => {
        console.log(event)
        form.setFieldsValue({
            seatsNumber: event
        });
        console.log(form.getFieldsValue())
    };

    const onCheckBoxChange = (event) => {
        console.log(event)
        form.setFieldsValue({
            closeTogether: event.target.checked
        });
        console.log(form.getFieldsValue())
    };

    const onFinish = (values) => {
       // values.map((e,k) => {
         //  reserveSeat("elo" + k)})
        setState(true)
        console.log(values);
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