import {
	addNewUser,
	deleteUserById,
	type User,
	type UserId,
} from "../store/users/slice";
import { useAppDispatch } from "./useStore";

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const createUser = ({ name, email, github }: User) => {
		dispatch(addNewUser({ name, email, github }));
	};

	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return { createUser, removeUser };
};
