import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  getUsersError,
  getUsersRequest,
  getUsersSuccess
} from '../redux/users/actions';

function useUsers() {
  const dispatch = useDispatch();

  const fetchUsers = useCallback(async () => {
    dispatch(getUsersRequest());

    const data = await fetch(`https://reqres.in/api/users`);
    const usersData = await data.json();
    const users = usersData.data;

    if (usersData) dispatch(getUsersSuccess(users));
    else dispatch(getUsersError('Something went wrong...'));
  }, [dispatch]);

  return {
    fetchUsers
  };
}

export default useUsers;
