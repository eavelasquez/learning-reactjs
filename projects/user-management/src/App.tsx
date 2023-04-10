import { Col, Grid } from "@tremor/react";
import { Toaster } from "sonner";

import "./App.css";
import CreateNewUser from "./components/CreateNewUser";
import ListOfUsers from "./components/ListOfUsers";

function App() {
	return (
		<>
			<Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
				<Col numColSpan={1} numColSpanLg={2}>
					<ListOfUsers />
				</Col>
				<CreateNewUser />
			</Grid>
			<Toaster richColors />
		</>
	);
}

export default App;
