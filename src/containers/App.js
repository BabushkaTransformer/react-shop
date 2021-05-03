import * as booksAction from "../actions/books";
import { connect } from "react-redux";
import App from "../components/App";
import { bindActionCreators } from "redux";
import orderBy from "lodash/orderBy";

const sortBy = (books, filterBy) => {
	switch (filterBy) {
		case "all":
			return books;
		case "author":
			return orderBy(books, "author", "asc");
		case "high_price":
			return orderBy(books, "price", "desc");
		case "low_price":
			return orderBy(books, "price", "asc");
		default:
			return books;
	}
};

const filterBooks = (books, searchQuery) => {
	return books.filter(
		(el) =>
			el.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
			el.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
	);
};

const searchBooks = (books, filterBy, searchQuery) => {
	return sortBy(filterBooks(books, searchQuery), filterBy);
};

const mapStateToProps = ({ books, filter }) => ({
	books: books.item && searchBooks(books.item, filter.filterBy, filter.searchQuery),
	isReady: books.isReady,
});
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(booksAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
