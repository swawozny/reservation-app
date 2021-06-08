import React from 'react';
import {connect} from "react-redux";
import {Button, Space} from 'antd';

const SeatsContainer = (props) =>
    <div className="site-layout-content">
        <Space size={[8, 16]} wrap>
            {props.seats.list.map(seat =>
                    <Button type="primary" ghost size="large" disabled={seat.reserved}>
                        {seat.id}
                    </Button>

                )}
        </Space>
    </div>

const mapStateToProps = state => ({
    seats: state.seats
})

export default connect(mapStateToProps, {})(SeatsContainer);