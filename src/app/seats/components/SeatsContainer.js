import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {Button, Space} from 'antd';
import {getAllSeats} from "../duck/operations";

const SeatsContainer = ({seats, getAllSeats}) => {

    useEffect(() => { getAllSeats() }, [])
    return (
        <div className="site-layout-content">
            <Space size={[8, 16]} wrap>
                {seats.list.map((seat, k) =>
                    <Button type="primary" key={k} ghost size="large" disabled={seat.reserved}>
                        {seat.id}
                    </Button>
                )}
            </Space>
        </div>
    )
}

const mapStateToProps = state => ({
    seats: state.seats
});

const mapDispatchToProps = dispatch => ({
    getAllSeats: () => dispatch(getAllSeats())
})

export default connect(mapStateToProps, mapDispatchToProps)(SeatsContainer);