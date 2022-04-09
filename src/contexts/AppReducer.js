export const initialState = {
	lang: 'ru',
};

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'initial_stored': {
			return action.value;
		}
		case 'change_language': {
			return {
				...state,
				lang: action.value,
			};
		}
	}
};
