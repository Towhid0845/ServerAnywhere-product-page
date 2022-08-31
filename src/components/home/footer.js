import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<div className="container">
				<div className="payment_options align-items-center d-flex flex-wrap justify-content-center pt-5">
					<a href="/PaymentOptions/#bKash">
						<img
							loading="lazy"
							src="/images/payments/bkash.svg"
							alt="bKash"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
					<a href="/PaymentOptions/#rocket">
						<img
							loading="lazy"
							src="/images/payments/rocket.svg"
							alt="rocket"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
					<a href="/PaymentOptions/#nogod">
						<img
							loading="lazy"
							src="/images/payments/nagad.svg"
							alt="nogod"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
					<a href="/PaymentOptions/#okwallet">
						<img
							loading="lazy"
							src="/images/payments/okwallet.svg"
							alt="okwallet"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
					<a href="/PaymentOptions/#upay">
						<img
							loading="lazy"
							src="/images/payments/upay.svg"
							alt="upay"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
					<a href="/PaymentOptions/#visa">
						<img
							loading="lazy"
							src="/images/payments/visa.svg"
							alt="visa"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
					<a href="/PaymentOptions/#mastercard">
						<img
							loading="lazy"
							src="/images/payments/master.svg"
							alt="mastercard"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
					<a href="/PaymentOptions/#americanexpress">
						<img
							loading="lazy"
							src="/images/payments/amex.svg"
							alt="american express"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
					<a href="/PaymentOptions/#brac">
						<img
							loading="lazy"
							src="/images/payments/brac.svg"
							alt="brac"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
					<a href="/PaymentOptions/#dbbl">
						<img
							loading="lazy"
							src="/images/payments/dbbl.svg"
							alt="dbbl"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
					<a href="/PaymentOptions/#asia">
						<img
							loading="lazy"
							src="/images/payments/asia.svg"
							alt="asia"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
					<a href="/PaymentOptions/#paypal">
						<img
							loading="lazy"
							src="/images/payments/paypal.svg"
							alt="paypal"
							width="60"
							height="35"
							className="img-fluid"
						/>
					</a>
				</div>
				<div className="text-center py-4">
					<p className="mb-0">
						Read our
						<a href="/SLA/">
							<b> Service Level Agreement</b>
						</a>
						&#44;
						<a href="/AUP/">
							<b> Acceptable Usage Policy </b>
						</a>
						&amp;
						<a href="/Terms/">
							<b> Terms of Service</b>
						</a>
					</p>
				</div>
			</div>
			<div className="copyright">
				<div class="container">
					<div class="row py-4 text-center">
						<div class="">
							<p class="mb-0">
								Copyright © 2021 - 2022 Server Anywhere, Bangladesh. All rights
								reserved.
							</p>
							{/* <Link to="/topbar">Topbar</Link> */}
							<br />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
