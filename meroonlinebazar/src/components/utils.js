const token = "";

export const login = () => {
    sessionStorage.setItem(token, 'TestLogin');
}

export const logout = () => {
    sessionStorage.removeItem(token);
}

export const isLogin = () => {
    if (sessionStorage.getItem(token)) {
        return true;
    }

    return false;
}