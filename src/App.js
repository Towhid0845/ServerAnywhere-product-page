import React from "react";
import Home from "./components/home";
import VPS from "./components/pages/vps/index";
import Dedicated from "./components/pages/dedicated/index";
import Cloud from "./components/pages/cloud/index";
import Admin_page from "./components/pages/admin/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Delete from "./components/pages/admin/delete/delete";
import Update from "./components/pages/admin/update/update";
// import Read from "./components/pages/admin/read/read";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./components/pages/admin/admin.css";
import Create from "./components/pages/admin/create/create";
import Read from "./components/pages/admin/read/read";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />}></Route>
					<Route exact path="/vps" element={<VPS />}></Route>
					<Route exact path="/dedicated" element={<Dedicated />}></Route>
					<Route exact path="/cloud" element={<Cloud />}></Route>
					<Route exact path="/admin" element={<Admin_page />}></Route>
					<Route exact path="/admin/create" element={<Create />}></Route>
					<Route exact path="/admin/read" element={<Read />}></Route>
					<Route exact path="/admin/update" element={<Update />}></Route>
					{/* <Route exact path="/admin/delete" element={<Delete />}></Route> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
