import { combineReducers } from 'redux';
import { singleUserReducer } from './singleUser/reducer';

import { usersReducer } from './users/reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  singleUser: singleUserReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
