import ReactCountryFlag from "react-country-flag";
import "./FlagChain.css";

const countries = [
	{ name: "France", code: "FR" },
	{ name: "Italy", code: "IT" },
	{ name: "United States", code: "US" },
	{ name: "Spain", code: "ES" },
	{ name: "United Kingdom", code: "GB" },
	{ name: "Germany", code: "DE" },
	{ name: "Canada", code: "CA" },
	{ name: "Australia", code: "AU" },
	{ name: "Brazil", code: "BR" },
	{ name: "Pakistan", code: "PK" },
	{ name: "Japan", code: "JP" },
	{ name: "South Korea", code: "KR" },
	{ name: "Ukraine", code: "UA" },
	{ name: "Norway", code: "NO" },
	{ name: "Colombia", code: "CO" },
	{ name: "Portugal", code: "PT" },
	{ name: "Israel", code: "IL" },
	{ name: "Peru", code: "PE" },
	{ name: "Belgium", code: "BE" },
	{ name: "Netherlands", code: "NL" },
	{ name: "India", code: "IN" },
	{ name: "Hungary", code: "HU" },
	{ name: "Czech Republic", code: "CZ" },
	{ name: "Iran", code: "IR" },
	{ name: "China", code: "CN" },
	{ name: "Austria", code: "AT" },
];

export function FlagChain() {
	return (
		<div className="flag-chain">
			{countries.map((country) => (
				<ReactCountryFlag
					key={country.code}
					countryCode={country.code}
					svg
					style={{
						width: "2em",
						height: "2em",
						marginRight: "0.5em",
						borderRadius: "3px",
						boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
					}}
					title={country.name}
				/>
			))}
		</div>
	);
}
