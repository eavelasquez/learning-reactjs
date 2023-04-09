import {
	Badge,
	Button,
	Card,
	Flex,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";

const users: {
	id: string;
	name: string;
	email: string;
	github: string;
}[] = [
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

export default function ListOfUsers() {
	return (
		<Card>
			<Flex justifyContent="start" className="space-x-2">
				<Title>Users</Title>
				<Badge color="green">6</Badge>
			</Flex>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell> ID </TableHeaderCell>
						<TableHeaderCell className="text-right"> Name </TableHeaderCell>
						<TableHeaderCell className="text-right"> Email </TableHeaderCell>
						<TableHeaderCell className="text-right"> Actions </TableHeaderCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{users.map((item) => (
						<TableRow key={item.id}>
							<TableCell>{item.id}</TableCell>
							<TableCell className="flex items-center space-x-2">
								<img
									className="w-6 h-6 rounded-full mr-2"
									src={`https://unavatar.io/github/${item.github}`}
									alt={`${item.name} avatar`}
								/>
								{item.name}
							</TableCell>
							<TableCell className="text-right">{item.email}</TableCell>
							<TableCell className="text-right">
								<Flex justifyContent="end" className="space-x-2">
									<Button
										size="xs"
										variant="light"
										color="amber"
										onClick={() => console.log("Edit")}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
											/>
										</svg>
									</Button>
									<Button
										color="red"
										variant="light"
										size="xs"
										onClick={() => console.log("Delete")}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</Button>
								</Flex>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Card>
	);
}
