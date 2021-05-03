import React from "react";

const CartItems = ({ id, title, price, image, author, removeToCart }) => {
	return (
		<div className="cart__item">
			<img src={image} alt="" />
			<div className="cart__desc">
				<h5>{title}</h5>
				<h6>{author}</h6>
				<h5>{price} сомов</h5>
			</div>
			<button onClick={removeToCart.bind(this, id)}>X</button>
		</div>
	);
};

export default CartItems;
