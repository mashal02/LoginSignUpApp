<template>
  <nav
    class="navbar navbar-dark sticky-top navbar-expand-lg"
    style="background-color: rgb(0, 121, 105)"
  >
    <div class="container-fluid">
      <img class="navbar-brand" id="logo" src="../../assets/logo.png" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link active" aria-current="page"
              >About Us</router-link
            >
          </li>

          <li v-if="!requiresAuth" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/login" class="dropdown-item"
                  >Log In</router-link
                >
              </li>
              <li>
                <router-link to="/Signup" class="dropdown-item"
                  >Sign up</router-link
                >
              </li>
            </ul>
          </li>
          <li v-else class="nav-item">
            <a class="nav-link" href="#" @click="logout">Logout</a>
          </li>
        </ul>
        <span class="navbar-text">
          <router-link
            to="/profile"
            class="nav-link active"
            aria-current="page"
          >
            {{ StoreloggedInUser.user }}
          </router-link>
        </span>
      </div>
    </div>
  </nav>

  <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav> -->
</template>

<script>
import { useloggedinuserStore } from "../store/LoggedInUser";
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  name: "Navbar",
  setup() {
    const router = useRouter();
    const route = useRoute();

    const token = ref(localStorage.getItem("token"));
    const name = ref(localStorage.getItem("name"));
    const StoreloggedInUser = useloggedinuserStore();
    const requiresAuth = computed(() => route.meta.requiresAuth);

    const logout = () => {
      localStorage.clear();
      StoreloggedInUser.removeUser();
      router.push("/");
    };

    return {
      token,
      name,
      requiresAuth,
      logout,
      StoreloggedInUser,
    };
  },
};
</script>

<style scoped>
#logo {
  width: 50px;
  height: 50px;
}
</style>
