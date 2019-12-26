import Job from '../Job';

export interface JobsState {
    pending: boolean;
    jobs: Job[];
    error: string;
}

export interface JobState {
    pending: boolean;
    job: Job;
    error: string;
}
