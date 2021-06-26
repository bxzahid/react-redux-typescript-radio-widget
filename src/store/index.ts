import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import data from "./data";
import error from "./error";
import meta from "./meta";

const middleware =
	process.env.NODE_ENV === "development"
		? composeWithDevTools(applyMiddleware(...[thunk]))
		: applyMiddleware(...[thunk]);

const store = createStore(
	combineReducers({
		data,
		error,
		meta,
	}),
	middleware
);

export default store;
