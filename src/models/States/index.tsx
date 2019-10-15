import Job from '../Job';

export interface JobsState {
    pending: boolean;
    jobs: Job[];
    error: string;
}