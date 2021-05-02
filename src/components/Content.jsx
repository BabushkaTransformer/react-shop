import React from "react";
import BookCard from "./BookCard";
import Filter from "../containers/filter";

const Content = ({ books, isReady }) => {
	return (
		<div className="content">
			<div className="content__inner container">
				<div className="content__left">
					{!isReady
						? "Загрузка..."
						: books.map((item, index) => {
								return <BookCard key={index} {...item} />;
						  })}
				</div>
				<div className="content__right">
					<Filter />
				</div>
			</div>
		</div>
	);
};

export default Content;
