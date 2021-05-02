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

const mapStateToProps = ({ books }) => ({
	books: sortBy(books.item, books.filterBy),
	isReady: books.isReady,
});
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(booksAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
