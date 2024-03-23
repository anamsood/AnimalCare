import "./Navbar.css";
// import { FontAwsome } from "@fortawesome/fontawesome-free";

export default function Navbar() {
	return (
		<>
			<div id="nav">
				<div className="logo">
					<img src="" alt="logo" />
					<h4>Animal Care</h4>
				</div>
				{/* <FontAwsome icon="fa - solid" /> */}
				<img src="" alt="location icon" />
				<select>
					<option>punjab</option>
					<option>chnaodk</option>
					<option>pundscsd</option>
				</select>
				<input type="text" placeholder="search " />
				<p>contact us</p>
				<img src="" alt="account icon" />
			</div>
		</>
	);
}
