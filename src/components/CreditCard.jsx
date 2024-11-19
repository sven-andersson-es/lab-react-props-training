import logoVisa from "../assets/images/visa.png";
import logoMasterCard from "../assets/images/master-card.svg";
import "./CreditCard.css";
export default function CreditCard({
	type,
	number,
	expirationMonth,
	expirationYear,
	bank,
	owner,
	bgColor,
	color,
}) {
	const maskedNumber = (number) => {
		return number.slice(-4);
	};
	const expiration = (month, year) => {
		const monthString = month.toString();
		const yearString = year.toString();
		return (
			(monthString.length === 1 ? "0" + monthString : monthString) +
			"/" +
			yearString.slice(-2)
		);
	};

	return (
		<article className="cc" style={{ backgroundColor: bgColor, color: color }}>
			<div className="cc-logo">
				<img
					src={type === "Visa" ? logoVisa : logoMasterCard}
					className="cc-logo"
				/>
			</div>
			<div className="cc-number">
				<span>●●●●</span>
				<span>●●●●</span>
				<span>●●●●</span>
				<span>{maskedNumber(number)}</span>
			</div>
			<div>
				<div className="cc-expiration">
					<div className="expire">
						<span>Expires {expiration(expirationMonth, expirationYear)}</span>
						{bank}
					</div>
				</div>
				<div className="cc-name">
					<div className="expire">{owner}</div>
				</div>
			</div>
		</article>
	);
}

/* 

  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white" 

*/
