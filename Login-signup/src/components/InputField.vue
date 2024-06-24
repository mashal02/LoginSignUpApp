<template>
  <div class="mb-3">
    <div class="form-group">
      <label class="form-label">{{ label }}</label>
      <input
        :type="type"
        class="form-control"
        :value="modelValue"
        @input="onInput"
      />
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue";
export default {
  name: "InputField",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit }) {
    const { label, type, modelValue, errorMessage } = toRefs(props);
    const onInput = (event) => {
      //console.log(event.target.value);
      emit("update:modelValue", event.target.value);
    };

    return {
      label,
      type,
      modelValue,
      errorMessage,
      onInput,
    };
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 12px;
  font-style: italic;
}
.form-control {
  border: none;
  border-bottom: 1px solid #15562a;
  border-radius: 0px;
  box-shadow: none;
  outline: none;
}
.form-label {
  color: #15562a;
  margin-bottom: 0%;
}
</style>
