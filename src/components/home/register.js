import React from "react";

function Register() {
	return (
		<section id="register">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="text-center text-md-left">
							<h3 className="text-white mt-2">Register Domain</h3>
						</div>
					</div>
					<div className="col-md-8 d-flex justify-content-center justify-content-md-end">
						<form
							action="https://account.alpha.net.bd/domainchecker.php?currency=2"
							method="post"
							className="domain-searh-form"
						>
							<div className="domian_input_fileds">
								<span className="text-muted">www.</span>
								<input
									type="text"
									name="domain"
									placeholder="Enter your domain name"
								/>
								<button type="submit" value="search">
									Search
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Register;
