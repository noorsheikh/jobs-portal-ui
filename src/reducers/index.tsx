import { combineReducers } from 'redux';
import { jobsReducer } from './jobs';
import {searchJobsReducer } from './searchJobs';

const rootReducer = combineReducers({
    jobs: jobsReducer,
    jobsSearchResult: searchJobsReducer
});

export default rootReducer;
