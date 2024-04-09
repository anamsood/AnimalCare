import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<div id="nav-home">
				<div className="logo">
					<img src="" alt="logo" />
					<h4>Little Paws</h4>
				</div>
				{/* <FontAwsome icon="fa - solid" /> */}
				<span>
					<p>Shelters</p>
					<select>
						<option>All</option>
						<option>Chandigarh</option>
						<option>Delhi</option>
						<option>Zirakpur</option>
					</select>
				</span>
				<input type="text" placeholder="search " />
				<p>Help a friend!</p>
				<p>Contact Us</p>
				<p onClick={() => navigate("/login")}>Login</p>
			</div>
		</>
	);
};

export default Home;
