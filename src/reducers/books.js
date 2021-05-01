const initialState = {
	book: [
		{
			id: 1,
			title: "dsfas",
		},
	],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case "ADD_BOOK":
			return {
				...state,
				book: [...state.books, action.payload],
			};
		case "SET_BOOK":
			return {
				...state,
				book: action.payload,
			};
		default:
			return state;
	}
};
