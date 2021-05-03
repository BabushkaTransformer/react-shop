import React from "react";
import CartItems from "./CartItems";
import CartSvg from "../assets/img/cart.svg";

const Menu = ({ totalPrice, сount, items }) => {
	return (
		<div className="header">
			<div className="header__container container">
				{/* logo */}
				<div className="header__logo">
					book<span>Store</span>
				</div>
				{/* total */}
				<div className="header__total">{totalPrice} сом</div>
				{/* cart */}
				<div className="header__cart cart">
					<img src={CartSvg} alt="" /> <span className="top_label">{сount}</span>
					{/* items */}
					<div className="cart__hidden">
						{items.map((el, index) => {
							return <CartItems key={index} {...el} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
