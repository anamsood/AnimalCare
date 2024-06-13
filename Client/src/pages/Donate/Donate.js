import Navbar from "../../components/Navbar/Navbar";
import DonationForm from "../../components/DonationForm/DonationForm";
import "./Donate.css";
import React, { useContext, useState } from "react";
import Image from "../../assets/donationform.webp";
import Footer from "../../components/Footer/Footer.js";

function Donate() {
	return (
		<>
			<Navbar />
			<div id="donate">
				<img src={Image} />
				<DonationForm />
			</div>
			<Footer />
		</>
	);
}
export default Donate;
