// src/composables/useAuth.js
import { ref } from "vue";
import axios from "axios";

export function useAuth() {
  const token = ref("");
  const isInvalid = ref(false);

  const login = async (username, password) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      token.value = response.data.token;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "name",
        response.data.firstName + " " + response.data.lastName
      );
      isInvalid.value = false;
      return response.data;
    } catch (error) {
      isInvalid.value = true;
      console.error("Login error:", error);
    }
  };

  return {
    token,
    isInvalid,
    login,
  };
}
