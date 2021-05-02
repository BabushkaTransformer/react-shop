import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setBooks } from "./actions/books";

function App(props) {
	useEffect(() => {
		const { setBooks } = props;
		axios.get("/books.json").then(({ data }) => {
			setBooks(data);
		});
	}, []);

	const { books, isReady } = props;
	return (
		<ul>
			{!isReady
				? "Загрузка..."
				: books.map((item) => {
						return <li>{item.title}</li>;
				  })}
		</ul>
	);
}

const mapStateToProps = ({ books }) => ({
	books: books.item,
	isReady: books.isReady,
});
const mapDispatchToProps = (dispatch) => ({
	setBooks: (books) => dispatch(setBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
