<template>
  <div class="toast" :class="{ show: visible }">
    <div class="toast-header">
      <strong class="me-auto">{{ title }}</strong>
      <button
        type="button"
        class="btn-close"
        @click="visible = false"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: "Toast Header",
    },
  },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    resetToast() {
      this.visible = true;
    },
  },
  mounted() {
    setTimeout(() => {
      this.visible = false;
    }, 5000);
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 10px;
  right: 1rem;
  background-color: #ffb9c2;
  color: #000000;
  border-radius: 0.25rem;
  z-index: 2000;
  display: none;
}

.show {
  display: block;
}

.toast-header {
  background-color: #ff0022;
  color: #ffffff;
  border-bottom: none;
}

.toast-body {
  padding: 0.5rem;
}
</style>
