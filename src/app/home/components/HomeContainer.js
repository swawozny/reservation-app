import React from "react";
import {Button, Row, Col, Checkbox, Form, InputNumber} from "antd";
import {Link} from "react-router-dom";
import './home.css'

const HomeContainer = () => {
    const [form] = Form.useForm();

    return (
        <Row type="flex" justify="center" align="middle">
            <Col>
                <Form form={form} name="basic" className="home-form" style={{padding: '25px'}}>
                    <Form.Item
                        style={{alignItems: "center"}}
                        label="Liczba Miejsc"
                    >
                        <InputNumber min={1} max={151} size="large" className="home-form-input"/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox>
                            <p>Czy miejsca mają być obok siebie?</p>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Link to="/seats">
                            <Button type="primary" size="large" className="home-form-button">
                                Wybierz miejsca
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    )
};

export default HomeContainer;