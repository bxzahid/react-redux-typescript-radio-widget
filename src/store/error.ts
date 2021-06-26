import { IErrorAction } from "../interfaces";

// Actions
const CATCH_ERROR = "CATCH_ERROR";

// Reducer
const reducer = (state = {}, { type, payload }: IErrorAction) => {
	switch (type) {
		case CATCH_ERROR: {
			return payload.error;
		}
		default:
			return state;
	}
};

export default reducer;

// Action Creators
export const catchError = (error: string) => ({
	type: CATCH_ERROR,
	payload: { error: error ? error : {} },
});
