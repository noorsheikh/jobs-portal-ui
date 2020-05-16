import { combineReducers } from 'redux';
import { jobsReducer } from './jobs';
import { jobReducer } from './job';
import { searchJobsReducer } from './searchJobs';
import { categoriesReducer } from './categories';
import { registerUserReducer } from './user';
import { userLoginReducer } from './auth';

const rootReducer = combineReducers({
    jobs: jobsReducer,
    job: jobReducer,
    jobsSearchResult: searchJobsReducer,
    categories: categoriesReducer,
    registerUser: registerUserReducer,
    currentUser: userLoginReducer,
});

export default rootReducer;
