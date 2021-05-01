import React from "react";
import { connect } from "react-redux";
import { setBooks } from "./actions/books";

function App(props) {
	const { book } = props.books;
	const { setBooks } = props;
	console.log(props);
	const newBooks = [
		{
			id: 0,
			title: "asdfadsf",
		},
	];
	return (
		<div className="App">
			{book[0].title}
			<button onClick={setBooks.bind(this, newBooks)}>dafsdfsdf</button>
		</div>
	);
}

const mapStateToProps = (state) => ({
	...state,
});
const mapDispatchToProps = (dispatch) => ({
	setBooks: (books) => dispatch(setBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
