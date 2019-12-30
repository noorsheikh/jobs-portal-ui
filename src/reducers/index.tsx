import { combineReducers } from 'redux';
import { jobsReducer } from './jobs';
import { jobReducer } from './job';
import { searchJobsReducer } from './searchJobs';
import { categoriesReducer } from './categories';

const rootReducer = combineReducers({
    jobs: jobsReducer,
    job: jobReducer,
    jobsSearchResult: searchJobsReducer,
    categories: categoriesReducer
});

export default rootReducer;
