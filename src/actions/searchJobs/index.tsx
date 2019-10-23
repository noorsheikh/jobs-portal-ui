import axios from 'axios';
import { Dispatch } from 'redux';
import Job from '../../models/Job';

export enum SearchJobsActionTypes {
    SEARCH_JOBS_PENDING = 'SEARCH_JOBS_PENDING',
    SEARCH_JOBS_SUCCESS = 'SEARCH_JOBS_SUCCESS',
    SEARCH_JOBS_ERROR = 'SEARCH_JOBS_ERROR'
}

interface JobsPending {
    type: typeof SearchJobsActionTypes.SEARCH_JOBS_PENDING;
}

interface JobsSuccess {
    type: typeof SearchJobsActionTypes.SEARCH_JOBS_SUCCESS;
    payload: Job[]
}

interface JobsError {
    type: typeof SearchJobsActionTypes.SEARCH_JOBS_ERROR;
    error: string;
}

const searchJobsPending = (): JobsPending => {
    return {
        type: SearchJobsActionTypes.SEARCH_JOBS_PENDING
    }
}

const searchJobsSuccess = (jobs: Job[]): JobsSuccess => {
    return {
        type: SearchJobsActionTypes.SEARCH_JOBS_SUCCESS,
        payload: jobs
    }
}

const searchJobsError = (error: string): JobsError => {
    return {
        type: SearchJobsActionTypes.SEARCH_JOBS_ERROR,
        error
    }
}

export const searchJobs = (what: string, where: string) => async (dispatch: Dispatch) => {
    dispatch(searchJobsPending());
    try {
        const jobs = await axios.post(`http://localhost:3030/jobs/search/${what}/${where}`);
        setTimeout(() => {
            dispatch(searchJobsSuccess(jobs.data));
        }, 1000);
    } catch(error) {
        dispatch(searchJobsError(error));
    }
}
