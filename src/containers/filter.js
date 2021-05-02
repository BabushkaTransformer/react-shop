import { connect } from "react-redux";
import * as filterAction from "../actions/filter";
import { bindActionCreators } from "redux";
import Filter from "../components/Filter";

const mapStateToProps = ({ books }) => ({
	filterBy: books.filterBy,
});
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(filterAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
