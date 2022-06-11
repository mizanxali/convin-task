import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  getSingleUserError,
  getSingleUserRequest,
  getSingleUserSuccess
} from '../redux/singleUser/actions';

function useSingleUser() {
  const dispatch = useDispatch();

  const fetchSingleUser = useCallback(
    async (id: number) => {
      dispatch(getSingleUserRequest());

      const data = await fetch(`https://reqres.in/api/users/${id}`);
      const singleUserData = await data.json();
      const singleUser = singleUserData.data;

      if (singleUserData) dispatch(getSingleUserSuccess(singleUser));
      else dispatch(getSingleUserError('Something went wrong...'));
    },
    [dispatch]
  );

  return {
    fetchSingleUser
  };
}

export default useSingleUser;
