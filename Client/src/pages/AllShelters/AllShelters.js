import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import ShelterCard from "../../components/ShelterCard/ShelterCard.js";
import "./AllShelters.css";

function AllShelters() {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState("All");
	const navigate = useNavigate();

	useEffect(() => {
		fetch("http://localhost:4000/api/v2/shelters")
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error("Error fetching data:", error));
	}, []);

	const filterHanlder = (event) => {
		setFilter(event.target.value);
		console.log(filter);
	};
	const filteredShelter = data.filter((shelter) => {
		if (filter === "All") {
			return true;
		} else {
			return shelter.city === filter;
		}
	});

	const shelterHandler = (title) => {
		navigate("/shelter", { state: { title } });
	};
	return (
		<>
			<Navbar />
			<div className="filter-container">
				<select value={filter} onChange={filterHanlder}>
					<option value="All">All</option>
					<option value="Chandigarh">Chandigarh</option>
					<option value="Zirakpur">Zirakpur</option>
					<option value="Delhi">Delhi</option>
				</select>
			</div>
			{filteredShelter.map((shelter) => (
				<ShelterCard
					key={shelter.id}
					title={shelter.title}
					location={shelter.location}
					image={shelter.image}
					open={shelter.open}
					close={shelter.close}
					onClick={() => shelterHandler(shelter.title)}
				/>
			))}
		</>
	);
}
export default AllShelters;
