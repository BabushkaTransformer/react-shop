const initialState = {
	isReady: false,
	item: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_BOOK":
			return {
				...state,
				item: [...state.books, action.payload],
			};
		case "SET_BOOK":
			return {
				...state,
				item: action.payload,
				isReady: true,
			};
		case "SET_IS_READY":
			return {
				...state,
				isReady: action.payload,
			};
		default:
			return state;
	}
};
