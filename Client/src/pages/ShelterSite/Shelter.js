import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Shelter.css";
import DataCard from "../../components/DataCard/DataCard.js";

function Shelter() {
	const location = useLocation();
	const { title } = location.state || {};
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://localhost:4000/api/v2/shelter-data/${title}`, {
					withCredentials: true,
				});
				setData(response.data);
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		if (title) {
			fetchData();
		}
	}, [title]);

	return (
		<>
			<Navbar />
			<div id="main">
				<center>
					<h1>{title}</h1>
				</center>
				<div id="shelter-data">
					{data.map((item) => (
						<DataCard key={item.id} image={item.url} alt={item.title} />
					))}
				</div>
			</div>
		</>
	);
}

export default Shelter;
