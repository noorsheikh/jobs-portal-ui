import Job from '../Job';
import Category from '../Category';

export interface JobsState {
    pending: boolean;
    jobs: Job[];
    error: string;
}

export interface JobState {
    pending: boolean;
    job: Job;
    error: string;
}

export interface CategoriesState {
    pending: boolean;
    categories: Category[];
    error: string;
}
