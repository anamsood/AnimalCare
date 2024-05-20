import "./ShelterCard.css";
function ShelterCard(props) {
	return (
		<>
			<div id="shelter">
				<div id="shelter-card">
					<img className="shelter-image" src={props.image} alt="shelter" />
					<span className="shelter-details">
						<h2>{props.title}</h2>
						<h4>{props.location}</h4>
						<p>
							opens from {props.open}to {props.close}
						</p>
					</span>
				</div>
			</div>
		</>
	);
}

export default ShelterCard;
