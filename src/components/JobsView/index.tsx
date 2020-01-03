import React from 'react';
import Job from '../../models/Job';
import JobItem from '../JobItem';

interface JVProps {
    jobs: Job[];
    isListView: boolean;
}

const JobsView: React.FC<JVProps> = ({ jobs, isListView }: JVProps) => (
    <React.Fragment>
        {jobs && jobs.map((job, index) =>
            (index < 6) && <JobItem job={job} isListView={isListView} key={job.id} />
        )}
    </React.Fragment>
);

export default JobsView;
