import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Menu from "./Menu";
import BookCard from "./BookCard";

function App(props) {
	useEffect(() => {
		const { setBooks } = props;
		axios.get("/books.json").then(({ data }) => {
			setBooks(data);
		});
	}, []);

	const { books, isReady } = props;
	return (
		<div>
			<Menu />
			<div className="items container">
				{!isReady
					? "Загрузка..."
					: books.map((item, index) => {
							return <BookCard key={index} {...item} />;
					  })}
			</div>
		</div>
	);
}

export default App;
