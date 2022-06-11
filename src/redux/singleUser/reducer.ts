import { User } from '../../types';
import {
  GET_SINGLE_USER,
  GET_SINGLE_USER_ERROR,
  GET_SINGLE_USER_SUCCESS
} from './types';

const initialState: ISingleUserState = {
  singleUserLoading: false,
  singleUser: null,
  singleUserError: null
};

const singleUserReducer = (state = initialState, action: ISinlgeUserAction) => {
  switch (action.type) {
    case GET_SINGLE_USER:
      return { ...state, singleUserLoading: true };
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        singleUserLoading: false,
        singleUser: action.payload as User
      };
    case GET_SINGLE_USER_ERROR:
      return {
        ...state,
        singleUserLoading: false,
        singleUserError: action.payload as string
      };

    default:
      return state;
  }
};

export interface ISingleUserState {
  singleUserLoading: boolean;
  singleUser: User | null;
  singleUserError: string | null;
}

export { singleUserReducer };

interface ISinlgeUserAction {
  type: string;
  payload: any;
}
