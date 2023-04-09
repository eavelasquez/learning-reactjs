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
		id: "1",
		name: "Peter Doe",
		email: "peter.doe@mail.com",
		github: "peter-doe",
	},
	{
		id: "2",
		name: "Lena Whitehouse",
		email: "lena.whitehouse@mail.com",
		github: "lena-whitehouse",
	},
	{
		id: "3",
		name: "Phil Less",
		email: "phil.less@mail.com",
		github: "phil-less",
	},
	{
		id: "4",
		name: "John Camper",
		email: "john.camper@mail.com",
		github: "john-camper",
	},
	{
		id: "5",
		name: "Max Balmoore",
		email: "max.balmore@mail.com",
		github: "max-balmore",
	},
	{
		id: "6",
		name: "Peter Moore",
		email: "peter.moore@mail.com",
		github: "peter-moore",
	},
];

// Self-invoking function to get the initial state from localStorage
const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state__");
	return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addUser: (state, action: PayloadAction<UserWithId>) => {
			state.push(action.payload);
		},
		updateUserById: (state, action: PayloadAction<UserWithId>) => {
			const user = action.payload;
			const index = state.findIndex((u) => u.id === user.id);
			state[index] = user;
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export const { addUser, updateUserById, deleteUserById } = usersSlice.actions;

export default usersSlice.reducer;
