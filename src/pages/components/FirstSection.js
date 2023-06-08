import React from 'react';
import { Col, Row } from 'reactstrap';
import FirstectionImg from '../../assets/img/FirstectionImg.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const FirstSection = () => {
    return (
        <>
            <Row className='m-0'>
                {/* Left Column */}
                <Col xl='6'>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '500px' }}>
                        <div>
                            <h1 className='FirstSectionHeadinng'>Home services, on demand.</h1>
                            <InputGroup className="mb-3">
                                <DropdownButton
                                    title="Select your Location"
                                    id="input-group-dropdown-1"
                                    className='txtColour'
                                >
                                    {/* Dropdown items */}
                                    <Dropdown.Item >Telibagh</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item >Alambagh</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item >SGPGI</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item >Charbagh</Dropdown.Item>
                                </DropdownButton>
                                <Form.Control className='txtColour' placeholder='Search for services' aria-label="Text input with dropdown button" />
                            </InputGroup>
                        </div>
                    </div>
                </Col>
                {/* Right Column */}
                <Col xl='6' className='text-center'>
                    <img className='FirstSectionImgStyle img-fluid' src={FirstectionImg} alt="ADIMG" />
                </Col>
            </Row>
        </>
    );
};

export default FirstSection;
