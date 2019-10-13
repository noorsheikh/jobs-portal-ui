import React from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Jumbotron,
  Button,
  Form,
  Card,
  Badge
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faBuilding, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="#">Jobs Portal</Navbar.Brand>
          <Navbar.Toggle area-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#">
                For Job Posters
              </Nav.Link>
              <Nav.Link href="#">
                For Job Seekers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
        <Jumbotron className="jumbotron">
          <Container>
                <h1 className="jumbotron__title">Are you looking for <br /> your dream <span className="text-primary">job</span> ?</h1>
                <h2 className="jumbotron__sub-title">We can help you with that!</h2>
                <Form>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>What</Form.Label>
                    <Form.Text>job title, keywords, or company</Form.Text>
                    <Form.Control
                      required
                      type="text"
                      placeholder="e.g. Keywords, Position..."
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Where</Form.Label>
                    <Form.Text>city, or organization</Form.Text>
                    <Form.Control
                      type="text"
                      placeholder="e.g. IT, Business Administration"
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
      <Container>
        <Row className="justify-content-md-center">
          <Col lg={10}>
            <Card className="job">
              <Card.Body>
                <Row>
                  <Col xs={10}>
                    <Card.Title>Front-End Developer</Card.Title>
                  </Col>
                  <Col className="text-right">
                    <Card.Text>5000 - 10000 $</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Text>
                      <span className="job-meta">
                        <FontAwesomeIcon icon={faGlobeAsia} size="xs" className="job-meta__icon" />
                        Tetra Tech
                      </span>
                      <span className="job-meta">
                        <FontAwesomeIcon icon={faMapMarkedAlt} size="xs" className="job-meta__icon" />
                        Herat
                      </span>
                      <span className="job-meta">
                        <FontAwesomeIcon icon={faBuilding} size="xs" className="job-meta__icon" />
                        Full Time
                      </span>
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="row-spacing">
                  <Col xs={10}>
                    <Card.Text>
                      <Badge pill variant="secondary" className="job-skill">JavaScript</Badge>
                      <Badge pill variant="secondary" className="job-skill">React/Redux</Badge>
                      <Badge pill variant="secondary" className="job-skill">Bootstrap</Badge>
                    </Card.Text>
                  </Col>
                  <Col className="text-right">
                    <Button variant="primary" size="sm" block>Apply</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="job">
              <Card.Body>
                <Row>
                  <Col xs={10}>
                    <Card.Title>Finance Manager</Card.Title>
                  </Col>
                  <Col className="text-right">
                    <Card.Text>3000 - 8000 $</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Text>
                      <span className="job-meta">
                        <FontAwesomeIcon icon={faGlobeAsia} size="xs" className="job-meta__icon" />
                        Chemonics, Int.
                      </span>
                      <span className="job-meta">
                        <FontAwesomeIcon icon={faMapMarkedAlt} size="xs" className="job-meta__icon" />
                        Kabul
                      </span>
                      <span className="job-meta">
                        <FontAwesomeIcon icon={faBuilding} size="xs" className="job-meta__icon" />
                        Full Time
                      </span>
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="row-spacing">
                  <Col xs={10}>
                    <Card.Text>
                      <Badge pill variant="secondary" className="job-skill">Audit</Badge>
                      <Badge pill variant="secondary" className="job-skill">Budgeting</Badge>
                      <Badge pill variant="secondary" className="job-skill">Accounting</Badge>
                    </Card.Text>
                  </Col>
                  <Col className="text-right">
                    <Button variant="primary" size="sm" block>Apply</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="job">
              <Card.Body>
                <Row>
                  <Col xs={10}>
                    <Card.Title>Senior M&E Specialist</Card.Title>
                  </Col>
                  <Col className="text-right">
                    <Card.Text>6000 - 12000 $</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Text>
                      <span className="job-meta">
                        <FontAwesomeIcon icon={faGlobeAsia} size="xs" className="job-meta__icon" />
                        Checchi and Company Consulting, Inc.
                      </span>
                      <span className="job-meta">
                        <FontAwesomeIcon icon={faMapMarkedAlt} size="xs" className="job-meta__icon" />
                        Kabul
                      </span>
                      <span className="job-meta">
                        <FontAwesomeIcon icon={faBuilding} size="xs" className="job-meta__icon" />
                        Full Time
                      </span>
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="row-spacing">
                  <Col xs={10}>
                    <Card.Text>
                      <Badge pill variant="secondary" className="job-skill">JavaScript</Badge>
                      <Badge pill variant="secondary" className="job-skill">React/Redux</Badge>
                      <Badge pill variant="secondary" className="job-skill">Bootstrap</Badge>
                    </Card.Text>
                  </Col>
                  <Col className="text-right">
                    <Button variant="primary" size="sm" block>Apply</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
