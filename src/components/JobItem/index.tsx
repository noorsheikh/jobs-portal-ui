import React from 'react';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import Job from '../../models/Job';
import { NavLink } from 'react-router-dom';

interface JIProps {
    job: Job
    isListView: boolean;
}

const JobItem: React.FC<JIProps> = (props: JIProps) => {
    const { job, isListView } = props;
    return (
        <Col lg={isListView ? 12 : 4} className="job-item">
            <Card className="job-item__body">
                <Row>
                    <Col lg={isListView ? 6 : 12}>
                        <Card.Title as={NavLink} to={`/jobs/${job.id}`} className="job-item__title">{job.title}</Card.Title>
                        <Card.Subtitle className="job-item__company">
                            <FontAwesomeIcon icon={faBuilding} size="sm" className="job-item__company--icon" /> {job.company}
                        </Card.Subtitle>
                    </Col>
                    <Col lg={isListView ? 3 : 12}>
                        <Card.Text className="job-item__type-location">
                            {job.metadata.type} <span className="job-item__type-location--in">in</span> {job.location},<br /><span className="job-item__post-time">3 days ago</span>
                        </Card.Text>
                    </Col>
                    <Col lg={isListView ? 3 : 12}>
                    <Card.Text className="job-item__skills">
                        {job.metadata.skills && job.metadata.skills.map((skill, index) => {
                            return <Badge key={index + 1} pill variant="secondary" className="job-item__skills--item">{skill}</Badge>
                        })}
                    </Card.Text>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}

export default JobItem;
