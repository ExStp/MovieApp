import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { APP_COOKIE_NAME } from "../utils/constants/CONST";

const initAuth = { isLogin: false, accountId: null };

export function saveCookieAuth(data) {
	try {
		const user = JSON.stringify(data);
		Cookies.set(APP_COOKIE_NAME, user, { expires: 7, sameSite: "None", secure: true });
	} catch (error) {
		console.error("Ошибка сохранения данных аутентификации:", error);
	}
}

export function getCookieAuth() {
	try {
		const user = Cookies.get(APP_COOKIE_NAME);
		if (user) {
			return JSON.parse(user);
		}
	} catch (error) {
		console.error("Ошибка получения данных аутентификации:", error);
	}
}

const authSlice = createSlice({
	name: "auth",
	initialState: getCookieAuth() || initAuth,
	reducers: {
		userLogin(state, action) {
			const newAuth = { isLogin: true, accountId: action.payload };
			saveCookieAuth(newAuth);
			state.isLogin = true;
			state.accountId = action.payload;
		},
		userLogout() {
			saveCookieAuth(initAuth);
			return initAuth;
		},
	},
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
