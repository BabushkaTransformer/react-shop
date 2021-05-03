import React from "react";

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {
	const handlerItemClick = (e) => {
		setFilter(e.target.getAttribute("name"));
	};
	return (
		<div className="sidebar">
			{/* filter */}
			<div className="sidebar__filter">
				<span name="all" active={filterBy === "all"} onClick={handlerItemClick}>
					Все
				</span>
				<span name="author" active={filterBy === "author"} onClick={handlerItemClick}>
					Автор
				</span>
				<span name="high_price" active={filterBy === "high_price"} onClick={handlerItemClick}>
					Цена(по убыванию)
				</span>
				<span name="low_price" active={filterBy === "low_price"} onClick={handlerItemClick}>
					Цена (по возрастанию)
				</span>
			</div>
			{/* input */}
			<div className="sidebar__input">
				<input type="text" onChange={(e) => setSearchQuery(e.target.value)} value={searchQuery} placeholder="Поиск" />
			</div>
		</div>
	);
};

export default Filter;
