import { useState } from "react";
import "./DataCard.css";
function DataCard(props) {
	const [clicked, setClicked] = useState(false);

	const clickHandler = () => {
		setClicked(!clicked);
	};
	return (
		<>
			<div className="data-card">
				<img className="data-image" src={props.image} alt={props.title} />
				<button onClick={clickHandler}>{clicked ? "Applied" : "Adopt Now!"}</button>
			</div>
		</>
	);
}

export default DataCard;
