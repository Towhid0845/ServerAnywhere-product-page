import React from "react";

function Topbar() {
	return (
		<section id="top_bar">
			<div className="header_top font1440">
				<div className="container">
					<ul>
						<li>
							<a href="#">
								<i class="fa-solid fa-location-dot me-1"></i>
								<span className="d-none d-sm-inline-block">
									Office Location
								</span>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bx bx-phone me-1"></i>
								<span className="d-none d-sm-inline-block">
									+88 00000-000000
								</span>
							</a>
						</li>
						<li>
							<a href="#">
								<i className="bx bx-log-in-circle me-1"></i>
								<span className="d-none d-sm-inline-block">Login</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Topbar;
