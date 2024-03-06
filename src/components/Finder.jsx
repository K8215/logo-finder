import React, { useState, useEffect } from "react";
import CompanyInput from "./CompanyInput";
import LogoOutput from "./LogoOutput";

export default function Finder() {
	const [src, setSrc] = useState(null);
	const [error, setError] = useState(null);

	return (
		<>
			<CompanyInput error={error} setError={setError} setSrc={setSrc} />
			{src && <LogoOutput error={error} setError={setError} src={src} />}
		</>
	);
}
