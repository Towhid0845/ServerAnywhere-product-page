import React from "react";
import Topbar from "./topbar";
import Header from "./header";
import Navbar from "./navbar";
import Banner from "./banner";
import Register from "./register";
import Footer from "./footer";

const Home = () => {
	return (
		<div>
			<Topbar />
			<Header />
			<Navbar />
			<Banner />
			<Register />
			<Footer />
		</div>
	);
};
export default Home;
