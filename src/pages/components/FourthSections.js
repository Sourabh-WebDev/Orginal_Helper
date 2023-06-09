import React from 'react'
import { Col, Row } from 'reactstrap'
import Services from '../../assets/img/Subscription.png'

const FourthSections = () => {
    return (
        <div className='bg-warning'>
            <div className="text-center">
                <h1>Our Best Plans</h1>
            </div>
            <Row>
                <Col>
                    <img className='img-fluid' src={Services} />
                </Col>
                <Col>
                    <div className="d-flex align-items-center justify-content-center mt-5">
                        <div>
                            <h3>MONTHLY PLAN STARTING</h3>
                            <div>
                                <ul>
                                    <li>4 FULL CAR WASHES ( INTERIOR & EXTERIOR )</li>
                                    <li>11 FREE DUSTING</li>
                                </ul>
                            </div>
                            <h3>ONE TIME WASH STARTING</h3>
                            <div>
                                <ul>
                                    <li>1 FULL CAR WASH</li>
                                    <li>1 FREE DUSTING ( WITHIN 1 WEEK )</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default FourthSections