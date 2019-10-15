import axios from 'axios';
import { Dispatch } from 'redux';
import Job from '../../models/Job';

export enum JobsActionTypes {
    FETCH_JOBS_PENDING = 'FETCH_JOBS_PENDING',
    FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS',
    FETCH_JOBS_ERROR = 'FETCH_JOBS_ERROR'
}

interface JobsPending {
    type: typeof JobsActionTypes.FETCH_JOBS_PENDING;
}

interface JobsSuccess {
    type: typeof JobsActionTypes.FETCH_JOBS_SUCCESS;
    payload: Job[]
}

interface JobsError {
    type: typeof JobsActionTypes.FETCH_JOBS_ERROR;
    error: string;
}

const fetchJobsPending = (): JobsPending => {
    return {
        type: JobsActionTypes.FETCH_JOBS_PENDING
    }
}

const fetchJobsSuccess = (jobs: Job[]): JobsSuccess => {
    return {
        type: JobsActionTypes.FETCH_JOBS_SUCCESS,
        payload: jobs
    }
}

const fetchJobsError = (error: string): JobsError => {
    return {
        type: JobsActionTypes.FETCH_JOBS_ERROR,
        error
    }
}

export const fetchJobs = () => async (dispatch: Dispatch) => {
    dispatch(fetchJobsPending());
    try {
        const jobs = await axios.get('http://localhost:3030/jobs');
        dispatch(fetchJobsSuccess(jobs.data.jobs));
    } catch(error) {
        dispatch(fetchJobsError(error));
    }
}
