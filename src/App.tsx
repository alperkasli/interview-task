import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { ExampleTable } from "./pages/ExampleTable";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/example-table" element={<ExampleTable />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
