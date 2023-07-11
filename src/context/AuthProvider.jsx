import Cookies from "js-cookie";
import { createContext, useState, useContext, useReducer } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	if (!Cookies.get("MoviesAppAuth")) {
		saveCookieAuth(initAuth);
	}
	const user = getCookieAuth();

	const [auth, authDispatch] = useReducer(authReducer, user);

	return <AuthContext.Provider value={[auth, authDispatch]}>{children}</AuthContext.Provider>;
}

export function saveCookieAuth(data) {
	const user = JSON.stringify(data);
	Cookies.set("MoviesAppAuth", user, { expires: 7, sameSite: "None", secure: true });
}

export function getCookieAuth() {
	return JSON.parse(Cookies.get("MoviesAppAuth"));
}

export function useAuth() {
	return useContext(AuthContext);
}

function authReducer(auth, action) {
	switch (action.type) {
		case "user_login": {
			const nextAuth = { ...auth, accountId: action.accountId, isLogin: true };
			saveCookieAuth(nextAuth);
			return nextAuth;
		}

		case "user_logout": {
			saveCookieAuth(initAuth);
			return initAuth;
		}

		default: {
			console.warn("AuthProvider: неизвестный action.type = " + action.type);
		}
	}
}

const initAuth = { isLogin: false, accountId: null };
