import axios from "axios";

const API = axios.create({
  baseURL: "https://login-signup-yyxk.onrender.com/api", // backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// LOGIN API
export const loginUser = (data) => API.post("/login", data);
export const signupUser = (data) => API.post("/signup", data);

// Other APIs can be added here
export const getUsers = () => API.get("/users");

export default API;