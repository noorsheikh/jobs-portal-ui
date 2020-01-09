import React from 'react';
import { Container, Row, Col, Form, FormGroup, InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faAlignRight } from '@fortawesome/free-solid-svg-icons';

class SignIn extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3}} className="justify-content-md-center">
                        <div className="sign-in">
                            <h1 className="sign-in__heading">Sign in to apply for a job</h1>
                            <Form className="sign-in__form">
                            <FormGroup>
                                    <Form.Label className="sign-in__form--label">Username or Email</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text className="sign-in__form--icon">
                                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="text" className="sign-in__form--input" placeholder="Your Username or Email" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Form.Label className="sign-in__form--label">Password</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                        <InputGroup.Text className="sign-in__form--icon">
                                                <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                            </InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control type="text" className="sign-in__form--input" placeholder="Your Password" />
                                    </InputGroup>
                                </FormGroup>
                                <div className="sign-in__form--submit">
                                    <Button type="submit" className="sign-in__form--submit-btn">Sign In</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SignIn;
