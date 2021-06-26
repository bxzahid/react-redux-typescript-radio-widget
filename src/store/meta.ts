import { IMetaAction } from "../interfaces";

// Actions
const LOADING = "LOADING";
const SET_TOAST_MESSAGE = "SET_TOAST_MESSAGE";

// Reducer
const init = {
	isLoading: false,
	toastMessage: "",
};

const reducer = (state = init, { type, payload }: IMetaAction) => {
	switch (type) {
		case LOADING: {
			return {
				...state,
				isLoading: payload.isLoading,
			};
		}
		case SET_TOAST_MESSAGE: {
			return {
				...state,
				toastMessage: payload.toastMessage,
			};
		}
		default:
			return state;
	}
};

export default reducer;

// Action Creators
export const setLoading = (loadingState: boolean) => ({
	type: LOADING,
	payload: { isLoading: loadingState },
});

export const setToastMessage = (toastMessage: string) => ({
	type: SET_TOAST_MESSAGE,
	payload: { toastMessage: toastMessage ? toastMessage : "" },
});
