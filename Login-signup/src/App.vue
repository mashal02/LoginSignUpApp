<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
<!-- <style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style> -->
