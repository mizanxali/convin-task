import { User } from '../../types';
import {
  GET_SINGLE_USER,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR
} from './types';

export function getSingleUserRequest() {
  return {
    type: GET_SINGLE_USER
  };
}

export function getSingleUserError(message: string) {
  return {
    type: GET_SINGLE_USER_ERROR,
    payload: message
  };
}

export function getSingleUserSuccess(payload: User) {
  return {
    type: GET_SINGLE_USER_SUCCESS,
    payload
  };
}
