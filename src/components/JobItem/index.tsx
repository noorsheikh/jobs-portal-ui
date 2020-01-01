import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import Job from '../../models/Job';
import { NavLink } from 'react-router-dom';

const JobItem: React.FC<Job> = (job: Job) => {
    return (
        <Col className="job-item">
            <Card className="job-card__body">
                <Row>
                    <Col lg={6}>
                        <Card.Title as={NavLink} to={`/jobs/${job.id}`} className="job-card__title">{job.title}</Card.Title>
                        <Card.Subtitle className="job-card__company">
                            <FontAwesomeIcon icon={faBuilding} size="sm" className="job-card__company--icon" /> {job.company}
                        </Card.Subtitle>
                    </Col>
                    <Col lg={3}>
                        <Card.Text className="job-card__type-location">
                            {job.metadata.type} <span className="job-card__type-location--in">in</span> {job.location},<br /><span className="job-card__post-time">3 days ago</span>
                        </Card.Text>
                    </Col>
                    <Col lg={3}>
                    <Card.Text className="job-card__skills">
                        {job.metadata.skills && job.metadata.skills.map((skill, index) => {
                            return <Badge key={index + 1} pill variant="secondary" className="job-card__skills--item">{skill}</Badge>
                        })}
                    </Card.Text>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default JobItem;
