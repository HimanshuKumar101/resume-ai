import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true,
});

/**
 * Registers a new user
 * @param {string} username - The username of the new user
 * @param {string} email - The email of the new user
 * @param {string} password - The password of the new user
 * @returns {Promise} A promise that resolves to the response from the server
 */

export async function register(username, email, password) {
  try {
    const response = await api.post("/api/auth/register", {
      username,
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function login(email, password) {
  try {
    const response = await api.get("/api/auth/login", {
      params: {
        email,
        password,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function logout() {
  try {
    const response = await api.post("/api/auth/logout");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getMe() {
  try {
    const response = await api.get("/api/auth/get-me");

    return response.data;
  } catch (err) {
    console.log(err);
  }
}
