import { JobsActionTypes } from '../../actions';
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

export const jobsReducer = (state = initialState, action: JobAction) => {
    switch(action.type) {
        case JobsActionTypes.FETCH_JOBS_PENDING:
            return {
                ...state,
                pending: true
            }
        case JobsActionTypes.FETCH_JOBS_SUCCESS:
            return {
                ...state,
                pending: false,
                jobs: action.payload
            }
        case JobsActionTypes.FETCH_JOBS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}
