import Navbar from "../../components/Navbar/Navbar";
import DonationForm from "../../components/DonationForm/DonationForm";
import "./Donate.css";
import React, { useContext, useState } from "react";
import Image from "../../assets/donationform.webp";
import Footer from "../../components/Footer/Footer.js";
import { AuthContext } from "../../Context/AuthContext.js";
import AuthModal from "../../components/AuthModal/AuthModal";

function Donate() {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<>
			<Navbar />
			<div id="donate">
				<img src={Image} />
				<DonationForm />
			</div>
			{!isLoggedIn && <AuthModal />}
			<Footer />
		</>
	);
}
export default Donate;
