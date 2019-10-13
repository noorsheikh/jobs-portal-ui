import React from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Button,
    Form
} from 'react-bootstrap';

const SearchArea: React.FC = () => {
    return (
      <Jumbotron className="jumbotron">
        <Container>
                <h1 className="jumbotron__title">Are you looking for <br /> your dream <span className="text-primary">job</span> ?</h1>
                <h2 className="jumbotron__sub-title">We can help you with that!</h2>
                <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>What</Form.Label>
                        <Form.Text>job title, or keywords</Form.Text>
                        <Form.Control
                            required
                            type="text"
                            placeholder="e.g. Programming, or Software Engineer"
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Where</Form.Label>
                        <Form.Text>city, or organization</Form.Text>
                        <Form.Control
                            type="text"
                            placeholder="e.g. Kabul, Herat, or Tetra Tech"
                        ></Form.Control>
                    </Form.Group>
                </Form.Row>
                <Row className="text-right">
                    <Col>
                        <Button variant="primary" type="submit">Find Jobs</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
      </Jumbotron>
    )
}

export default SearchArea;
