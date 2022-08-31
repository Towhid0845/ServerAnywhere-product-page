import React from "react";
import Topbar from "../../home/topbar";
import Navbar from "../../home/navbar";
import Header from "../../home/header";
import Banner from "../../home/banner";
import Dedicated_Page from "./dedicated";
import Footer from "../../home/footer";

const Dedicated = () => {
	return (
		<div>
			<Topbar />
			<Header />
			<Navbar />
			<Banner />
			<Dedicated_Page />
			<Footer />
		</div>
	);
};
export default Dedicated;
