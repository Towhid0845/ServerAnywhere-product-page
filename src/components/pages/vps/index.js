import React from "react";
import Topbar from "../../home/topbar";
import Navbar from "../../home/navbar";
import Header from "../../home/header";
import Banner from "../../home/banner";
import VPS_Page from "./vps";
import Footer from "../../home/footer";

const VPS = () => {
	return (
		<div>
			<Topbar />
			<Header />
			<Navbar />
			<Banner />
			<VPS_Page />
			<Footer />
		</div>
	);
};
export default VPS;
