import { connect } from "react-redux";
import * as cartAction from "../actions/cart";
import { bindActionCreators } from "redux";
import BookCard from "../components/BookCard";

const mapStateToProps = ({ cart }, { id }) => ({
	addedCount: cart.items.reduce((count, book) => count + (book.id === id ? 1 : 0), 0),
});
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(cartAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
