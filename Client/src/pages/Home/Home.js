import "./Home.css";
// import { useNavigate } from "react-router-dom";
import Feed from "../../assets/feed-animals.jpeg";
import Adopt from "../../assets/adopt.jpeg";
import Shelter from "../../assets/build-shelter.jpeg";
import NavBar from "../../components/Navbar/Navbar.js";

const Home = () => {
	// const navigate = useNavigate();
	return (
		<>
			<NavBar />
			<div id="body">
				<button>Donate now!</button>
			</div>
			<div id="main-section">
				<h1>How can you contribute?</h1>
				<div className="main">
					<span>
						<img src={Adopt} alt="adopt-img" />
						<p>Adopt someone in need</p>
					</span>
					<span>
						<img src={Feed} alt="volunteer-img" />
						<p>Donate and let the volunteers feed instead of you!</p>
					</span>
				</div>
			</div>
			<div id="stats">
				<img src={Shelter} alt="stats-img" />
				<h2>
					Little Paws has contributed to building and supporting<br></br> 500+ shelters till now and
					helping over 200+ animals<br></br> finding their forever home.
				</h2>
			</div>
			<div id="helping">
				<h1>Want to help an injured animal?</h1>
				<span>
					<button>Help</button>
					<p>Fill this form and nearest available shelters will be there in no time.</p>
				</span>
			</div>
		</>
	);
};

export default Home;
