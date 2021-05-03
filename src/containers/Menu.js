import { connect } from "react-redux";
import * as filterAction from "../actions/filter";
import { bindActionCreators } from "redux";
import Menu from "../components/Menu";
import uniqBy from "lodash/uniqBy";

const mapStateToProps = ({ cart }) => ({
	totalPrice: cart.items.reduce((acc, el) => acc + el.price, 0),
	сount: cart.items.length,
	items: uniqBy(cart.items, (el) => el.id),
});
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(filterAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
