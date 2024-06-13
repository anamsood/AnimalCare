import "./ErrorModal.css";
import { useNavigate } from "react-router-dom";

function ErrorModal({ show, onClose }) {
	const navigate = useNavigate();
	const loginHandler = (event) => {
		event.preventDefault();
		navigate("/login");
	};

	if (!show) {
		return null;
	}
	return (
		<>
			<div id="error-container" className="hidden">
				<div className="error-modal">
					<button id="cancel" onClick={onClose}>
						X
					</button>
					<h1>Login to continue!</h1>
					<button onClick={loginHandler}>Login</button>
				</div>
			</div>
		</>
	);
}
export default ErrorModal;
