import React from "react";

const Menu = () => {
	return (
		<div className="header">
			<div className="header__container container">
				{/* logo */}
				<div className="header__logo">Магазинчик</div>
				{/* cart */}
				<div className="header__cart">
					Корзина <span>1</span>
				</div>
			</div>
		</div>
	);
};

export default Menu;
