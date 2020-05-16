import axios from 'axios';
import { User } from '../../models/User';
import { Dispatch } from 'redux';

export enum RegisterUserActionTypes {
  REGISTER_USER_PENDING = 'FETCH_JOB_PENDING',
  REGISTER_USER_SUCCESS = 'FETCH_JOB_SUCCESS',
  REGISTER_USER_ERROR = 'FETCH_JOB_ERROR'
}


export const registerUser = (userPayload: User) => async (dispatch: Dispatch) => {
  dispatch({ type: RegisterUserActionTypes.REGISTER_USER_PENDING });
  try {
    const user = axios.post(`http://localhost:3030/register-user`, userPayload);
    dispatch({
      type: RegisterUserActionTypes.REGISTER_USER_SUCCESS,
      payload: user
    });
  } catch (error) {
    dispatch({
      type: RegisterUserActionTypes.REGISTER_USER_ERROR,
      error
    });
  }
}
