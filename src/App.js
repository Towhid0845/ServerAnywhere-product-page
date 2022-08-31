import React from "react";
import Home from "./components/home";
import VPS from "./components/pages/vps/index";
import Dedicated from "./components/pages/dedicated/index";
import Cloud from "./components/pages/cloud/index";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/vps" element={<VPS />}></Route>
					<Route exact path="/dedicated" element={<Dedicated />}></Route>
					<Route exact path="/cloud" element={<Cloud />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
