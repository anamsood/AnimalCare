import "./Footer.css";
const Footer = function () {
	return (
		<>
			<div id="footer">
				<div className="containers">
					<span className="cols">
						<h2>ABOUT US</h2>
						<p>Terms and conditions</p>
						<p>Privacy prolicies</p>
					</span>
					<span className="cols">
						<h2>SOCIALS</h2>
						<p>Instagram</p>
						<p>Facebook</p>
					</span>
				</div>
				<div className="contact">
					<h2>CONTACT</h2>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input id="message" type="text" placeholder="Type your message" />
					<button>SEND MESSAGE</button>
				</div>
			</div>
		</>
	);
};

export default Footer;
