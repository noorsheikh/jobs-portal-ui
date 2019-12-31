import React from 'react';
import Job from '../../models/Job';
import { Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const JobCard: React.FC<Job> = (job: Job) => (
    <Card className="job-card">
        <div className="job-card__body">
        <Card.Title as={NavLink} to={`/jobs/${job.id}`} className="job-card__title">{job.title}</Card.Title>
        <Card.Subtitle className="job-card__company">
            <FontAwesomeIcon icon={faBuilding} size="sm" className="job-card__company--icon" /> {job.company}
        </Card.Subtitle>
        <Card.Text className="job-card__type-location">
            {job.metadata.type} <span className="job-card__type-location--in">in</span> {job.location}, <span className="job-card__post-time">3 days ago</span>
        </Card.Text>
        <Card.Text className="job-card__skills">
            {job.metadata.skills && job.metadata.skills.map((skill, index) => {
                return <Badge key={index + 1} pill variant="secondary" className="job-card__skills--item">{skill}</Badge>
            })}
        </Card.Text>
        </div>
    </Card>
);

export default JobCard;