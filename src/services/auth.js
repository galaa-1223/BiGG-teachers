import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/";

const login = (code, password) => {
    return axios
        .post(API_URL + "teacher-login", {
            code: code,
            password: password
        })
        .then((response) => {

            // if (response.data.accessToken) { // daraa hiih
                localStorage.setItem("teacher", JSON.stringify(response.data));
            // }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("teacher");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("teacher"));
};

export default {
    login,
    logout,
    getCurrentUser,
};