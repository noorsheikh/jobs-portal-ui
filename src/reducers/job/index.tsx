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
        companyId: 0,
        isActive: 1,
        postedBy: '',
        createdOn: '',
        updatedOn: '',
        category: {
            id: 0,
            name: '',
            description: '',
            icon: 'bars',
            total: 0,
        },
        meta: {
            type: '',
            salary: '',
        },
        skills: []
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
