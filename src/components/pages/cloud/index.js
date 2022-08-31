import React from "react";
import Topbar from "../../home/topbar";
import Navbar from "../../home/navbar";
import Header from "../../home/header";
import Banner from "../../home/banner";
import Cloud_Page from "./cloud";
import Footer from "../../home/footer";

const Cloud = () => {
	return (
		<div>
			<Topbar />
			<Header />
			<Navbar />
			<Banner />
			<Cloud_Page />
			<Footer />
		</div>
	);
};
export default Cloud;
