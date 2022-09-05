// import * as React from "react";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<a className="navbar-brand d-none" href="#">
					<img
						src="/images/sticky-brand.svg"
						alt="error"
						width="60"
						height="40"
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse main_menu"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						<li className="nav-item">
							{/* <a className="nav-link active" aria-current="page" href="#">
								
							</a> */}
							<Link to="/">
								<i className="bx bx-home"></i>
							</Link>
						</li>
						<li className="nav-item dropdown VPS">
							<Link to="/vps">VPS</Link>
							{/* <Link
								to="/vps"
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								VPS
							</Link> */}
							{/* <ul
								className="dropdown-menu container"
								aria-labelledby="navbarDropdown"
							> */}
							<ul>
								<li className="nav-item">
									<a className="dropdown-item" href="#last">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Manage VPS Hosting</div>
												<small className="menu-detail">
													Get a dedicated Virtual Server fully configured
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i className="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Unmanaged VPS</div>
												<small className="menu-detail">
													Windows and Linux Unmanaged VPS
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">VPS For Survey</div>
												<small className="menu-detail">
													VPS with USA Residential IP
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Windows VPS</div>
												<small className="menu-detail">
													Managed & Un-Managed Windows VPS
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Linux VPS</div>
												<small className="menu-detail">
													KVM/Qemu based based Virtual Servers
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">lxPanel VPS</div>
												<small className="menu-detail">
													Powerful, Fast and Secure Hosting Control Panel
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">cPanel VPS</div>
												<small className="menu-detail">
													cPanel/WHM Managed Linux VPS
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">KVM VPS</div>
												<small className="menu-detail">
													KVM/Qemu powered Linux VPS
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">
													VPN with Bangladeshi IP
												</div>
												<small className="menu-detail">
													Fast & Secure VPN Service
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">BDIX Linux VPS</div>
												<small className="menu-detail">
													BDIX Managed and Unmanaged Linux VPS
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">BDIX Windows VPS</div>
												<small className="menu-detail">
													BDIX Managed and Unmanaged Windows VPS
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">
													Reseller Hosting on VPS
												</div>
												<small className="menu-detail">
													Managed VPS-based reseller solution for your business
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Infrastructure Details</div>
												<small className="menu-detail">
													Unbeatable Infrastructure configuration
												</small>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown dedicated">
							<Link to="/dedicated">Dedicated</Link>
							{/* <Link
								to="/dedicated"
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dedicated Server
							</Link> */}
							{/* <ul
								className="dropdown-menu container"
								aria-labelledby="navbarDropdown"
							> */}
							<ul>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Dedicated Server in BD</div>
												<small className="menu-detail">
													Powerful dedicated servers in BD
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">
													Dedicated Server in USA
												</div>
												<small className="menu-detail">
													Scalable hosting environment in USA
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">
													Managed Dedicated Server
												</div>
												<small className="menu-detail">
													Fully Configured with Web Server, FTP Server, Database
													Server
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">
													Unmanaged Dedicated Server
												</div>
												<small className="menu-detail">
													Configure servers as you need
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">
													Windows Dedicated Server
												</div>
												<small className="menu-detail">
													Managed & Unmanaged Windows Dedicated Server
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Linux Dedicated Server</div>
												<small className="menu-detail">
													Managed & Unmanaged Linux Dedicated Server
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">
													Reseller Hosting Server
												</div>
												<small className="menu-detail">
													Professionally configured and optimized for best
													performance.
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Technology</div>
												<small className="menu-detail">
													Super Micro's latest MicroBlade platform
												</small>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown cloud">
							<Link to="/cloud">Cloud</Link>
							{/* <Link
								to="/cloud"
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Cloud
							</Link> */}
							{/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown"> */}
							<ul>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Cloud Storage</div>
												<small className="menu-detail">
													The Most Reliable and Secure Business Cloud Storage
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Cloud Hosting</div>
												<small className="menu-detail">
													With Cloud Hosting, you can concentrate on your
													business.
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Windows Private Cloud</div>
												<small className="menu-detail">
													VPS Windows Server for the best cloud experience
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Linux Private Cloud</div>
												<small className="menu-detail">
													Cloud Linux KVM VPS for personal storage
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">Dedicated Cloud RDP</div>
												<small className="menu-detail">
													Within a minute, you will have remote desktop access
													to your Windows VPS server.
												</small>
											</div>
										</div>
									</a>
								</li>
								<li className="nav-item">
									<a className="dropdown-item" href="#">
										<div className="d-flex align-items-center">
											<div className="menu-icon">
												<i class="fa-solid fa-computer"></i>
											</div>
											<div className="menu-text">
												<div className="menu-title">
													Cloud RDP With Residential IP
												</div>
												<small className="menu-detail">
													Cloud RDP for Surveys with a Residential IP Address
												</small>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
