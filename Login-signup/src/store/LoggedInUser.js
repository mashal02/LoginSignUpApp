// src/store/index.js
import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useloggedinuserStore = defineStore({
  id: "store",
  state: () => ({
    user: localStorage.getItem("name") || "",
    loading: ref(false),
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    removeUser() {
      this.user = "";
    },
    login: async (state, username, password) => {
      state.loading = true;
      try {
        const response = await axios.post("https://dummyjson.com/auth/login", {
          username,
          password,
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem(
          "name",
          response.data.firstName + " " + response.data.lastName
        );
        state.loading = false;
        return false;
      } catch (error) {
        console.error("Login error:", error);
        state.loading = false;
        return true;
      }
    },
  },
});
