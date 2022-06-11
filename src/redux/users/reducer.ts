import { User } from '../../types';
import { GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS } from './types';

const initialState: IUsersState = {
  usersLoading: false,
  users: [],
  usersError: null
};

const usersReducer = (state = initialState, action: IUsersAction) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, usersLoading: true };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        usersLoading: false,
        users: action.payload as User[]
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        usersLoading: false,
        usersError: action.payload as string
      };

    default:
      return state;
  }
};

export interface IUsersState {
  usersLoading: boolean;
  users: User[];
  usersError: string | null;
}

export { usersReducer };

interface IUsersAction {
  type: string;
  payload: any;
}
