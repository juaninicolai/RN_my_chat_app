/** @format */

export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_PASS = "SET_USER_PASS";
export const SET_USER_PHOTO = "SET_USER_PHOTO";

export const setEmail = email => dispatch => {
	dispatch({
		type: SET_USER_EMAIL,
		payload: email,
	});
};

export const setName = name => dispatch => {
	dispatch({
		type: SET_USER_NAME,
		payload: name,
	});
};

export const setPass = pass => dispatch => {
	dispatch({
		type: SET_USER_PASS,
		payload: pass,
	});
};

export const setPhoto = photo => dispatch => {
	dispatch({
		type: SET_USER_PHOTO,
		payload: photo,
	});
};
