import { Button, Card, Text, TextInput } from "@tremor/react";
import { FormEvent } from "react";

import { useUserActions } from "../hooks/useUserActions";
import { User } from "../store/users/slice";

export default function CreateNewUser() {
	const { createUser } = useUserActions();

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());
		createUser(data as unknown as User);
	};

	return (
		<Card
			className="w-full max-w-md mx-auto"
			decoration="top"
			decorationColor="indigo"
		>
			<Text>Create New User</Text>

			<form className="mt-6" onSubmit={handleSubmit}>
				<div className="mb-4">
					<TextInput
						name="name"
						type="text"
						className="mt-1"
						placeholder="User Name"
					/>
				</div>

				<div className="mb-4">
					<TextInput
						name="email"
						type="text"
						className="mt-1"
						placeholder="User Email"
					/>
				</div>

				<div className="mb-4">
					<TextInput
						name="github"
						type="text"
						className="mt-1"
						placeholder="Github Username"
					/>
				</div>

				<div className="mb-4 flex justify-end">
					<Button type="submit" color="indigo">
						Create
					</Button>
				</div>
			</form>
		</Card>
	);
}
