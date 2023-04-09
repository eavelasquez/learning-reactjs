import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
