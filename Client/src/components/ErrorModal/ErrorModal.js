import "./ErrorModal.css";
import { useNavigate } from "react-router-dom";

function ErrorModal({ show, onClose }) {
	const navigate = useNavigate();

	if (!show) {
		return null;
	}

	const loginHandler = (event) => {
		event.preventDefault();
		navigate("/login");
	};

	return (
		<>
			<div id="error-container" className="hidden">
				<div className="error-modal">
					<button id="cancel" onClick={onClose}>
						X
					</button>
					<h1 className="error-text">Login to continue!</h1>
					<button onClick={loginHandler}>Login</button>
				</div>
			</div>
		</>
	);
}
export default ErrorModal;
