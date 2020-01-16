import axios from 'axios';
import { Dispatch } from 'redux';
import Job from '../../models/Job';

export enum JobActionTypes {
    FETCH_JOB_PENDING = 'FETCH_JOB_PENDING',
    FETCH_JOB_SUCCESS = 'FETCH_JOB_SUCCESS',
    FETCH_JOB_ERROR = 'FETCH_JOB_ERROR'
}

interface JobPending {
    type: typeof JobActionTypes.FETCH_JOB_PENDING;
}

interface JobSuccess {
    type: typeof JobActionTypes.FETCH_JOB_SUCCESS;
    payload: Job[]
}

interface JobError {
    type: typeof JobActionTypes.FETCH_JOB_ERROR;
    error: string;
}

const fetchJobsPending = (): JobPending => {
    return {
        type: JobActionTypes.FETCH_JOB_PENDING
    }
}

const fetchJobsSuccess = (jobs: Job[]): JobSuccess => {
    return {
        type: JobActionTypes.FETCH_JOB_SUCCESS,
        payload: jobs
    }
}

const fetchJobsError = (error: string): JobError => {
    return {
        type: JobActionTypes.FETCH_JOB_ERROR,
        error
    }
}

export const fetchJob = (id: number) => async (dispatch: Dispatch) => {
    dispatch(fetchJobsPending());
    try {
        const job = await axios.get(`http://localhost:3030/job/${id}`);
        setTimeout(() => {
            dispatch(fetchJobsSuccess(job.data));
        }, 1000);
    } catch(error) {
        dispatch(fetchJobsError(error));
    }
}
