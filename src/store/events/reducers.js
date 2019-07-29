const initialState = {
	id          : 0,
	title       : '',
	description : '',
	date        : '',
	location    : '',
};

export const eventsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		default:
			return state;
	}
};
