import { User } from '../../types';
import { GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR } from './types';

export function getUsersRequest() {
  return {
    type: GET_USERS
  };
}

export function getUsersError(message: string) {
  return {
    type: GET_USERS_ERROR,
    payload: message
  };
}

export function getUsersSuccess(payload: User[]) {
  return {
    type: GET_USERS_SUCCESS,
    payload
  };
}
