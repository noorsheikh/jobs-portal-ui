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
import axios from 'axios';

interface Job {
  id: number;
  title: string;
  description: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  skills: string[]
}

interface AppState {
  jobs: Job[];
}

interface AppProps {
  title: string;
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    jobs: []
  }
  componentDidMount() {
    try {
      axios.get('http://localhost:3030/jobs')
      .then(response => {
        this.setState({jobs: response.data.jobs});
      })
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    const { jobs } = this.state;
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
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={10}>
              {jobs && jobs.map(job => {
                return <Card className="job" key={job.id}>
                  <Card.Body>
                    <Row>
                      <Col xs={9}>
                        <Card.Title>{job.title}</Card.Title>
                      </Col>
                      <Col className="text-right">
                        <Card.Text>{job.salary}</Card.Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card.Text>
                          <span className="job-meta">
                            <FontAwesomeIcon icon={faGlobeAsia} size="xs" className="job-meta__icon" />
                            {job.company}
                          </span>
                          <span className="job-meta">
                            <FontAwesomeIcon icon={faMapMarkedAlt} size="xs" className="job-meta__icon" />
                            {job.location}
                          </span>
                          <span className="job-meta">
                            <FontAwesomeIcon icon={faBuilding} size="xs" className="job-meta__icon" />
                            {job.type}
                          </span>
                        </Card.Text>
                      </Col>
                    </Row>
                    <Row className="row-spacing">
                      <Col xs={10}>
                        <Card.Text>
                          {job.skills && job.skills.map(skill => {
                            return <Badge pill variant="secondary" className="job-skill">{skill}</Badge>
                          })}
                        </Card.Text>
                      </Col>
                      <Col className="text-right">
                        <Button variant="primary" size="sm" block>Apply</Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              })}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
