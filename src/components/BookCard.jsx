import React from "react";

const BookCard = ({ title, author, price, image }) => {
	return (
		<div className="card">
			<div className="card__inner">
				{/* image */}
				<img src={image} alt="" className="card__img" />

				<div className="card__description">
					{/* title */}
					<h3 className="card__title">{title}</h3>
					{/* author */}
					<h4 className="card__author">{author}</h4>
					{/* price */}
					<div className="card__price">{price}</div>
				</div>
			</div>
		</div>
	);
};

export default BookCard;
