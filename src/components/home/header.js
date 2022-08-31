import React from "react";

function Header() {
	return (
		<section id="header">
			<div className="">
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="header_middle d-flex justify-content-between">
								<div className="header_left">
									<a className="" href="/">
										<div className="brand p-2">
											<img
												className=""
												loading="lazy"
												src="/images/main-logo.jpg"
												alt="serveranywhere-logo"
												width="250px"
												height="80px"
											/>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Header;
