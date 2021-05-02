const initialState = {
	items: [],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_BOOK":
			return {
				...state,
				item: [...state.item, action.payload],
			};
		case "REMOVE_BOOK":
			return {
				...state,
				item: state.items.filter((el) => el.id !== action.payload),
			};
		default:
			return state;
	}
};
