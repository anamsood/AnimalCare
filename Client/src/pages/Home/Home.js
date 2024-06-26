import "./Home.css";
import { useState } from "react";
import Feed from "../../assets/feed-animals.jpeg";
import Adopt from "../../assets/adopt.jpeg";
import NavBar from "../../components/Navbar/Navbar.js";
import logo from "../../assets/logo.png";
import Footer from "../../components/Footer/Footer.js";
import { useNavigate } from "react-router-dom";
import HelpingForm from "../../components/HelpingForm/HelpingForm";

const Home = (props) => {
	const navigate = useNavigate();
	const [showForm, setShowForm] = useState(false);

	const clickHandler = (event) => {
		event.preventDefault();
		navigate("/donate");
	};

	const closeForm = () => {
		setShowForm(false);
	};
	return (
		<>
			<NavBar />
			{showForm && <HelpingForm show={showForm} close={closeForm} />}
			<div id="body">
				<p>
					We beleive every animal<br></br> deserves a second chance.
				</p>
				<button onClick={clickHandler}>Donate Now!</button>
			</div>
			<div id="stats">
				<img src={logo} alt="stats-img" />
				<h2>
					Little Paws has contributed to building and supporting over<br></br> 500+ shelters till
					now and helping over 200+ animals<br></br> finding their forever home.
				</h2>
			</div>
			<div className="main">
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
			</div>
			<div id="helping">
				<span>
					<h1>Want to help an injured animal?</h1>
					<p>
						Fill this form and <br></br>nearest available shelters will be there in no time.
					</p>
				</span>
				<button onClick={() => setShowForm(true)}>Help</button>
			</div>
			<Footer />
		</>
	);
};

export default Home;
