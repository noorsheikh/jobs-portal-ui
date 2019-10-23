import { SearchJobsActionTypes } from '../../actions';
import Job from '../../models/Job';
import { JobsState } from '../../models/States';

interface JobAction {
    type: string;
    payload: Job[];
    error: string;
}

export const initialState: JobsState = {
    pending: false,
    jobs: [],
    error: ''
};

export const searchJobsReducer = (state = initialState, action: JobAction) => {
    switch(action.type) {
        case SearchJobsActionTypes.SEARCH_JOBS_PENDING:
            return {
                ...state,
                pending: true
            }
        case SearchJobsActionTypes.SEARCH_JOBS_SUCCESS:
            return {
                ...state,
                pending: false,
                jobs: action.payload
            }
        case SearchJobsActionTypes.SEARCH_JOBS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}
