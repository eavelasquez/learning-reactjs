import { User, UserId, addUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./useStore";

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const createUser = ({ name, email, github }: User) => {
		dispatch(addUser({ id: `${Date.now()}`, name, email, github }));
	};

	const removeUser = (id: UserId) => dispatch(deleteUserById(id));

	return { removeUser };
};
