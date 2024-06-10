<template>
<nav class="navbar navbar-dark sticky-top navbar-expand-lg " style="background-color: rgb(0, 121, 105);">
        <div class="container-fluid">
          <img class="navbar-brand" id="logo" src="../../assets/logo.png">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://shefa.sa/home">About Us</a>
              </li>
              <li class="nav-item">
                <router-link to="/profile" class="nav-link active" aria-current="page">Profile</router-link>
              </li>

              <li v-if="!requiresAuth" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/login" class="dropdown-item">Log In</router-link></li>
                  <li><router-link to="/Signup" class="dropdown-item">Sign up</router-link></li>
                </ul>
              </li>
            <li v-else class="nav-item">
              <a class="nav-link" href="#" @click="logout">Logout</a>
            </li>
            </ul>
            
          </div>
        </div>
      </nav>

</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      token: localStorage.getItem('token'),
      name: localStorage.getItem('name')
    }
  },
 computed:
  {
    isLoggedIn()
    {
      if(this.token|| this.name)
      {
        console.log('Logged in');
        return true;
      }
      else
      {
        console.log('Not logged in');
        return false;
      }
    
  },
requiresAuth(){
  return this.$route.meta.requiresAuth;

}


},
methods: {
  logout() {
    localStorage.clear();
    this.$router.push('/');
  }
}
}
</script>

<style scoped>
#logo {
  width: 50px;
  height: 50px;
}

</style>