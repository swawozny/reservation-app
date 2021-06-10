import {connect} from "react-redux";
import React from "react";
import {Alert, Card, Col, Row} from "antd";

const ReservationContainer = ({reservations, reservationConfirm}) => {

    if(reservationConfirm === true) {
        return (
            <div>
                <div className="site-layout-content">
                    <Alert
                        message="Sukces!"
                        description="Twoja rezerwacja przebiegła pomyślnie."
                        type="success"
                        showIcon
                    />
                    <div className="site-card-wrapper">
                        <h1>Wybrałeś następujące miejsca:</h1>
                        <Row gutter={16} style={{alignItems: 'center'}}>
                            {reservations.list.map((reservation, key) => {
                                return (
                                    <Col key={key} xs={24} md={12} xl={8} style={{padding: '5px', textAlign: 'center'}}>
                                        <Card>
                                            <p>
                                                rząd: {reservation.cords.y},
                                                miejsce: {reservation.cords.x} ({reservation.id})
                                            </p>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                    <Alert
                        message="Dziękujemy!"
                        description="W razie problemów prosimy o kontakt z działem administracji."
                        type="info"
                        showIcon
                    />
                </div>
            </div>
        )}
    else {
        return (
            <div className="site-layout-content">
                <Alert
                    message="Błąd!"
                    description="Coś poszło nie tak z rezerwacją."
                    type="error"
                    showIcon
                />
            </div>
        )
    }
};

const mapStateToProps = state => ({
    reservations: state.reservations,
    reservationConfirm: state.reservations.confirmed
});

export default connect(mapStateToProps)(ReservationContainer);