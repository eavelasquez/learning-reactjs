import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const DEFAULT_STATE: UserWithId[] = [
	{
		id: "e91c30ea",
		name: "Esteban Velasquez",
		email: "eavelasquez@proton.com",
		github: "eavelasquez",
	},
	{
		id: "a08dfc6a",
		name: "Ania Kubow",
		email: "ania.kubow@gmail.com",
		github: "kubowania",
	},
	{
		id: "663fd366",
		name: "Miguel Ángel Durán",
		email: "miduga@gmail.com",
		github: "midudev",
	},
];

// self-invoking function to get the initial state from localStorage
const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID().slice(0, 8);
			const user = { id, ...action.payload };
			state.push(user);
		},
		updateUserById: (state, action: PayloadAction<UserWithId>) => {
			const user = action.payload;
			const index = state.findIndex((u) => u.id === user.id);
			if (index >= 0) {
				state[index] = user;
			}
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlreadyDefined) {
				state.push(action.payload);
			}
		},
	},
});

export const { addNewUser, updateUserById, deleteUserById, rollbackUser } =
	usersSlice.actions;

export default usersSlice.reducer;
