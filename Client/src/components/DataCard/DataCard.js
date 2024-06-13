import { useState, useContext } from "react";
import "./DataCard.css";
import ErrorModal from "../ErrorModal/ErrorModal.js";
import { AuthContext } from "../../Context/AuthContext";

function DataCard(props) {
	const [clicked, setClicked] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const { isAuthenticated } = useContext(AuthContext);

	const clickHandler = () => {
		if (!isAuthenticated) {
			setShowModal(true);
		} else {
			setClicked(!clicked);
		}
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			{showModal && <ErrorModal show={showModal} onClose={closeModal} />}
			<div className="data-card">
				<img className="data-image" src={props.image} alt={props.title} />
				<button onClick={clickHandler}>{clicked ? "Applied" : "Adopt Now!"}</button>
			</div>
		</>
	);
}

export default DataCard;
