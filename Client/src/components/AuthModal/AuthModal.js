import "./AuthModal.css";
import { useNavigate } from "react-router-dom";

function AuthModal() {
	const navigate = useNavigate();
	const loginHandler = (event) => {
		event.preventDefault();
		navigate("/login");
	};

	return (
		<>
			<div id="authmodal">
				<h1>Login to continue!</h1>
				<button onClick={loginHandler}>Login</button>
			</div>
		</>
	);
}
export default AuthModal;
