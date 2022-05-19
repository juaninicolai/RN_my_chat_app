/** @format */
import { auth } from "../config/firebase";

import {
	SET_USER_EMAIL,
	SET_USER_NAME,
	SET_USER_PASS,
	SET_USER_PHOTO,
} from "./Actions";

export const initialState = {
	email: "",
	name: "",
	password: "",
	photoURL: "",
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER_EMAIL:
			return { ...state, email: action.payload };
		case SET_USER_NAME:
			return { ...state, name: action.payload };
		case SET_USER_PASS:
			return { ...state, password: action.payload };
		case SET_USER_PHOTO:
			return { ...state, photoURL: action.payload };
		default:
			return state;
	}
}
export default userReducer;
