import { React, useEffect } from "react";

export default function CompanyInput({ error, setError, setSrc }) {
	function handleInput() {
		const fieldValue = document.querySelector("#inputField").value;
		const url = `https://logo.clearbit.com/${fieldValue}`;
		setError(null);
		setSrc(url);
	}

	//Enter key functionality
	useEffect(() => {
		const keyDownHandler = (event) => {
			if (event.key === "Enter") {
				event.preventDefault();

				handleInput();
			}
		};

		document.addEventListener("keydown", keyDownHandler);
	}, []);

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
