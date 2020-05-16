import React from 'react';
import { Metadata } from '../../models/Job';

const JobMeta: React.FC<Metadata> = (meta: Metadata) => {
    return (
        <React.Fragment>
            {meta.salary && <div className="job-meta">
                <h6 className="job-meta__title"><strong>SALARY</strong></h6>
                <p className="job-meta__value">{meta.salary}</p>
            </div>}
            {meta.type && <div className="job-meta">
                <h6 className="job-meta__title"><strong>TYPE</strong></h6>
                <p className="job-meta__value">{meta.type}</p>
            </div>}
            {meta.reference && <div className="job-meta">
                <h6 className="job-meta__title"><strong>REFERENCE</strong></h6>
                <p className="job-meta__value">{meta.reference}</p>
            </div>}
            {meta.nationality && <div className="job-meta">
                <h6 className="job-meta__title"><strong>NATIONALITY</strong></h6>
                <p className="job-meta__value">{meta.nationality}</p>
            </div>}
            {meta.vacancies && <div className="job-meta">
                <h6 className="job-meta__title"><strong>VACANCIES</strong></h6>
                <p className="job-meta__value">{meta.vacancies}</p>
            </div>}
            {meta.experience && <div className="job-meta">
                <h6 className="job-meta__title"><strong>EXPERIENCE</strong></h6>
                <p className="job-meta__value">{meta.experience}</p>
            </div>}
        </React.Fragment>
    )
};

export default JobMeta;
