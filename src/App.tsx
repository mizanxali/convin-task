import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserButton from './components/UserButton/UserButton';
import UserCard from './components/UserCard/UserCard';
import useUsers from './hooks/useUsers';
import { RootState } from './redux/rootReducer';

import loader from './loader.svg';

function App() {
  const { fetchUsers } = useUsers();

  const { users, usersLoading, usersError } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  if (usersLoading)
    return (
      <div className="bg-gray-500 h-screen flex justify-center items-center">
        <img width={80} src={loader} />
      </div>
    );

  if (usersError)
    return (
      <div className="bg-gray-500 h-screen flex justify-center items-center">
        Something went wrong...
      </div>
    );

  return (
    <div className="bg-gray-500 h-screen p-20">
      <UserCard />
      <div className="flex w-full justify-center mt-5">
        {users.map((user) => (
          <UserButton key={user.id} id={user.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
