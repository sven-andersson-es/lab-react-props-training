export default function BoxColor(props) {
	const {
		color: [red, green, blue],
	} = props;
	const hexPart = (part) => {
		const hex = part.toString(16);
		return hex.length === 1 ? "0" + hex : hex;
	};
	const rgbToHex = (r, g, b) => {
		return "#" + hexPart(r) + hexPart(g) + hexPart(b);
	};
	return (
		<div
			className="box-color"
			style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
		>
			rgb({red},{green},{blue})<br />{rgbToHex(red,green,blue)}
		</div>
	);
}
