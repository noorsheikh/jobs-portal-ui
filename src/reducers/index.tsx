import { combineReducers } from 'redux';
import { jobsReducer } from './jobs';
import { jobReducer } from './job';
import {searchJobsReducer } from './searchJobs';

const rootReducer = combineReducers({
    jobs: jobsReducer,
    job: jobReducer,
    jobsSearchResult: searchJobsReducer
});

export default rootReducer;
