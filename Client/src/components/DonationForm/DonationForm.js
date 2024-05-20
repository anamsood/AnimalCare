import "./DonationForm.css";

function DonationForm() {
	return (
		<>
			<div id="donation">
				<form id="donation-form">
					<label>Your sponsered shelter</label>
					<select>
						<option>A</option>
						<option>b</option>
						<option>c</option>
					</select>

					<label>Plan</label>
					<span className="plan">
						<label>
							<input className="radio" type="radio" name="plan" value="one-time" /> One-time
						</label>
						<label>
							<input className="radio" type="radio" name="plan" value="monthly" /> Monthly
						</label>
					</span>

					<label>Amount(in rs)</label>
					<input className="number" type="number" />

					<button>Donate</button>
				</form>
			</div>
		</>
	);
}

export default DonationForm;
