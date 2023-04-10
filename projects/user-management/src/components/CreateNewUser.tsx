import { Badge, Button, Card, Text, TextInput } from "@tremor/react";
import { FormEvent, useEffect, useState } from "react";

import { useUserActions } from "../hooks/useUserActions";
import { type User } from "../store/users/slice";

export default function CreateNewUser() {
	const { createUser } = useUserActions();
	const [result, setResult] = useState<"success" | "error" | null>(null);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const formData = new FormData(form);
		const data = Object.fromEntries(formData.entries());

		if (!data.name || !data.email || !data.github) {
			setResult("error");
			return;
		}

		createUser(data as unknown as User);
		setResult("success");

		form.reset();
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setResult(null);
		}, 2000);

		return () => clearTimeout(timer);
	}, [result]);

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

				<span className="flex justify-center">
					{result === "success" && (
						<Badge color="green" className="ml-2">
							Success!
						</Badge>
					)}

					{result === "error" && (
						<Badge color="red" className="ml-2">
							Something went wrong!
						</Badge>
					)}
				</span>
			</form>
		</Card>
	);
}
