import { React, useState } from "react";

export default function CompanyInput({ error, setError, setSrc }) {
	function handleInput() {
		const fieldValue = document.querySelector("#inputField").value;
		const url = `https://logo.clearbit.com/${fieldValue}`;
		setError(null);
		setSrc(url);
	}

	return (
		<div className="input-wrapper">
			<input
				id="inputField"
				className="input-field"
				type="search"
				placeholder="Enter company domain"
			/>
			<button className="input-button" onClick={handleInput}>
				Submit
			</button>
			{error && <p className="error">Error: Invalid domain.</p>}
		</div>
	);
}
