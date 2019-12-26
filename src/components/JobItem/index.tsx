import React from 'react';
import { Card, Row, Col, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAsia, faMapMarkedAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import Job from '../../models/Job';
import { NavLink } from 'react-router-dom';

const JobItem: React.FC<Job> = (job: Job) => {
    return (
        <Card className="job">
            <Card.Body>
                <Row>
                    <Col xs={9}>
                        <Card.Title as={NavLink} to={`/jobs/${job.id}`}>{job.title}</Card.Title>
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
                            {job.skills && job.skills.map((skill, index) => {
                                return <Badge key={index + 1} pill variant="secondary" className="job-skill">{skill}</Badge>
                            })}
                        </Card.Text>
                    </Col>
                    <Col className="text-right">
                        <Button as={NavLink} to={`/jobs/${job.id}`} variant="primary" size="sm" block>Apply</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default JobItem;
