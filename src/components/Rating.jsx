import "./Rating.css";
export default function Rating(props) {
	const starRating = (rating) => {
		return Math.round(rating);
	};

	return (
		<div className="stars">
			{[...Array(5)].map((o,i) => {
				return <div key={i} role="img" className="star" rating={starRating(props.children)}></div>
			})}
		</div>
	);
}
