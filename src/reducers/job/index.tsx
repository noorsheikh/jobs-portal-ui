import { JobActionTypes } from '../../actions';
import Job from '../../models/Job';
import { JobState } from '../../models/States';

interface JobAction {
    type: string;
    payload: Job;
    error: string;
}

export const initialState: JobState = {
    pending: false,
    job: {
        id: 0,
        title: '',
        description: '',
        company: '',
        location: '',
        metadata: {
            type: '',
            salary: '',
            skills: []
        }
    },
    error: ''
};

export const jobReducer = (state = initialState, action: JobAction) => {
    switch(action.type) {
        case JobActionTypes.FETCH_JOB_PENDING:
            return {
                ...state,
                pending: true
            }
        case JobActionTypes.FETCH_JOB_SUCCESS:
            return {
                ...state,
                pending: false,
                job: action.payload
            }
        case JobActionTypes.FETCH_JOB_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}
