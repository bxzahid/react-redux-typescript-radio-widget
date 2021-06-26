import axios from "axios";
import data from "../data";
import { catchError } from "./error";
import { setLoading } from "./meta";

// Actions
const LOAD_DATA = "LOAD_DATA";
const SET_ITEM = "SET_ITEM";

const init = {
	data,
	selectedId: "",
	selectedName: "",
};

// Reducer
const reducer = (state = init, { type, payload }: any) => {
	switch (type) {
		case LOAD_DATA: {
			return { data: payload };
		}
		case SET_ITEM: {
			return {
				data: [...state.data],
				selectedId: payload.selectedId,
				selectedName: payload.selectedName,
			};
		}
		default:
			return state;
	}
};

export default reducer;

// Action Creators
export const loadData = () => async (dispatch: any) => {
	try {
		dispatch(setLoading(true));
		const { data } = await axios.get(
			"https://jsonplaceholder.typicode.com/todos"
		);

		dispatch(setData(data));

		dispatch(setLoading(false));
		dispatch(catchError(""));
	} catch (e) {
		dispatch(setLoading(false));
		dispatch(catchError(e));
	}
};

const setData = (data: any) => ({
	type: LOAD_DATA,
	payload: { data },
});

export const setItem = (selectedId: number, selectedName: string) => ({
	type: SET_ITEM,
	payload: { selectedId, selectedName },
});
