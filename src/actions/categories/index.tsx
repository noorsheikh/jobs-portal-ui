import axios from 'axios';
import { Dispatch } from 'redux';
import Category from '../../models/Category';

export enum CategoriesActionTypes {
    FETCH_CATEGORIES_PENDING = 'FETCH_CATEGORIES_PENDING',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR'
}

interface CategoriesPending {
    type: typeof CategoriesActionTypes.FETCH_CATEGORIES_PENDING;
}

interface CategoriesSuccess {
    type: typeof CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS;
    payload: Category[]
}

interface CategoriesError {
    type: typeof CategoriesActionTypes.FETCH_CATEGORIES_ERROR;
    error: string;
}

const fetchCategoriesPending = (): CategoriesPending => {
    return {
        type: CategoriesActionTypes.FETCH_CATEGORIES_PENDING
    }
}

const fetchCategoriesSuccess = (categories: Category[]): CategoriesSuccess => {
    return {
        type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
        payload: categories
    }
}

const fetchCategoriesError = (error: string): CategoriesError => {
    return {
        type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR,
        error
    }
}

export const fetchCategories = () => async (dispatch: Dispatch) => {
    dispatch(fetchCategoriesPending());
    try {
        const categories = await axios.get('http://localhost:3030/categories');
        setTimeout(() => {
            dispatch(fetchCategoriesSuccess(categories.data));
        }, 1000);
    } catch(error) {
        dispatch(fetchCategoriesError(error));
    }
}
