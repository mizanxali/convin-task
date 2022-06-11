import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';

const UserCard = () => {
  const { singleUser, singleUserError, singleUserLoading } = useSelector(
    (state: RootState) => state.singleUser
  );

  if (!singleUser) return null;

  if (singleUserError)
    return (
      <div className="border-2 border-black rounded-lg">
        Something went wrong...
      </div>
    );

  return (
    <div className="border-2 border-black rounded-lg px-10 py-5 flex">
      <img className="mr-10" src={singleUser.avatar} />
      <div>
        <h1 className="text-2xl font-bold">
          {singleUser.first_name} {singleUser.last_name}
        </h1>
        <h3 className="text-lg font-semibold">{singleUser.email}</h3>
      </div>
    </div>
  );
};

export default UserCard;
