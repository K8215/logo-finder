import React from "react";

export default function LogoOutput({ error, setError, src }) {
	function handleError() {
		setError(true);
	}

	return <>{!error && <img src={src} alt={src} onError={handleError} />}</>;
}
