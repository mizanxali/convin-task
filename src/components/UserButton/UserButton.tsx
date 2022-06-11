import useSingleUser from '../../hooks/useSingleUser';

const UserButton = ({ id }: IUserButtonProps) => {
  const { fetchSingleUser } = useSingleUser();

  function onButtonClickedHandler() {
    fetchSingleUser(id);
  }

  return (
    <div
      className="border-2 border-black px-20 py-6 mx-3 cursor-pointer hover:bg-gray-700 text-white text-3xl font-bold"
      onClick={onButtonClickedHandler}
    >
      {id}
    </div>
  );
};

export default UserButton;

interface IUserButtonProps {
  id: number;
}
