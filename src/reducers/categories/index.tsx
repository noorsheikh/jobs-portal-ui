import { CategoriesActionTypes } from '../../actions';
import Category from '../../models/Category';
import { CategoriesState } from '../../models/States';

interface CategoriesAction {
    type: string;
    payload: Category[];
    error: string;
}

export const initialState: CategoriesState = {
    pending: false,
    categories: [],
    error: ''
};

export const categoriesReducer = (state = initialState, action: CategoriesAction) => {
    switch(action.type) {
        case CategoriesActionTypes.FETCH_CATEGORIES_PENDING:
            return {
                ...state,
                pending: true
            }
        case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                pending: false,
                categories: action.payload
            }
        case CategoriesActionTypes.FETCH_CATEGORIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}
