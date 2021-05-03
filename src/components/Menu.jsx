import React from "react";
import CartItems from "./CartItems";

const Menu = ({ totalPrice, сount, items }) => {
	return (
		<div className="header">
			<div className="header__container container">
				{/* logo */}
				<div className="header__logo">Магазинчик</div>
				{/* cart */}
				<div className="header__cart cart">
					Корзина <span>({сount})</span>
					{/* items */}
					<div className="cart__hidden">
						{items.map((el, index) => {
							return <CartItems key={index} {...el} />;
						})}
					</div>
				</div>
				<div className="header__total">{totalPrice} сом</div>
			</div>
		</div>
	);
};

export default Menu;
