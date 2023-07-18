import Cookies from "js-cookie";
import { createContext, useContext, useReducer } from "react";
import { APP_COOKIE_NAME, DEFAULT_STATE } from "../utils/constants/CONST";

const AuthContext = createContext(DEFAULT_STATE);

export function AuthProvider({ children }) {
	if (!Cookies.get(APP_COOKIE_NAME)) {
		saveCookieAuth(initAuth);
	}
	const user = getCookieAuth();

	const [auth, authDispatch] = useReducer(authReducer, user);

	return <AuthContext.Provider value={[auth, authDispatch]}>{children}</AuthContext.Provider>;
}






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

export function useAuth() {
	return useContext(AuthContext);
}

function authReducer(auth, action) {
	switch (action.type) {
		case AUTH_ACTIONS.user_login: {
			const nextAuth = { isLogin: true, accountId: action.accountId };
			saveCookieAuth(nextAuth);
			return nextAuth;
		}

		case AUTH_ACTIONS.user_logout: {
			saveCookieAuth(initAuth);
			return initAuth;
		}

		default: {
			console.warn("AuthProvider: неизвестный action.type = " + action.type);
		}
	}
}

const initAuth = { isLogin: false, accountId: DEFAULT_STATE };

export const AUTH_ACTIONS = {
	user_login: "user_login",
	user_logout: "user_logout",
};
