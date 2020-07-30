import React, { useState } from 'react';
import { Row, Col, Typography, Button, Card } from 'antd';
import {
    MinusOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { connect } from 'react-redux'; //no es necesario con lo nuevo de hooks, pero se usa de nuevo con duck pattern
import {bindActionCreators} from 'redux';
//import { useSelector , useDispatch} from 'react-redux';
import {actionCreators  as counterActions, selector as counterSelector} from '../features/counter';

//    const Counter = ({ counter, increment, decrement }) => { //con el uso de hooks ya no son necesarios el uso de estos argumentos
const Counter = ({counter, counterActions}) => {
    //todo esto ya no es necesario con el patron duck
    // const counter= useSelector(state=> state.counter); //lo nuevo de react hooks
    // const dispatch= useDispatch();
    // const  increment=()=> dispatch({type: actionTypes.INCREMENT});
    // const decrement = ()=> dispatch({type: actionTypes.DECREMENT});


    return (
        <React.Fragment>
            <Card title="Counter Master Blaster" bordered={false}>
            <Row>
                <Col md={9} />
                <Col md={2}>
                    <Button size="large" icon={<MinusOutlined />} shape="circle" onClick={counterActions.decrement} />
                </Col>
                <Col md={2}>
                    <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>{counter.value}</span>
                </Col>
                <Col md={2}>
                    <Button size="large" icon={<PlusOutlined />} shape="circle" onClick={counterActions.increment} />
                </Col>
                <Col md={9} />
            </Row>
            </Card>
        </React.Fragment>
    )
}

//const mapStateToProps = state => ({ counter: state.counter }); //no es necesario con react hooks
const mapStateToProps = state => ({ ...counterSelector(state) }); //lo nuevo usando patron duck
//ya no es necesario con lo nuevo de react hooks
// const mapDispatchToProps = dispatch => ({
//     increment: () => { dispatch({ type: actionTypes.INCREMENT}) },
//     decrement: () => { dispatch({ type: actionTypes.DECREMENT }) }
// })

const mapDispatchToProps = dispatch => ({counterActions: bindActionCreators(counterActions,dispatch)})

//export default connect(null, mapDispatchToProps)(Counter); //el connect ya no es necesario con lo nuevo de react hooks
export default connect(mapStateToProps, mapDispatchToProps)(Counter) //lo nuevo con duck pattern
//export default Counter;