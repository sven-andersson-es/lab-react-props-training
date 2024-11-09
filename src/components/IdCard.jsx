function IdCard(props) {
	return (
        
		<article className="contact-card">
        { console.log(props.birth) }
			<div className="card-image">
				<img src={props.picture} />
			</div>
			<div>
				<p>
					<span>First name:</span> {props.firstName}
				</p>
				<p>
					<span>Last name:</span> {props.lastName}
				</p>
				<p>
					<span>Gender:</span> {props.gender}
				</p>
				<p>
					<span>Height:</span> {props.height}
				</p>
				<p>
					<span>Birth:</span> {props.birth.toDateString()}
				</p>
			</div>
		</article>
	)
}

export default IdCard;



