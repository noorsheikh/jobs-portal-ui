import React from 'react';
import { Col } from 'react-bootstrap';

const JobMetadata: React.FC<{name: string, value: string|[]}> = ({name, value}) => {
    return (
        <div className="job-meta">
            <h6 className="job-meta__title"><strong>{name.toUpperCase()}</strong></h6>
            <p className="job-meta__value">{typeof value === 'object' ? value.join(', ') : value}</p>
        </div>
    )
};

export default JobMetadata;
