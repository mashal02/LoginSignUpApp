<!-- Using prime vue input groups -->
<template>
  <div class="mb-3">
    <div class="form-group">
      <InputGroup>
        <InputGroupAddon>
          <i>{{ icon }}</i>
        </InputGroupAddon>
        <InputText
          :placeholder="label"
          :type="type"
          :value="modelValue"
          :invalid="modelValue == ''"
        />
      </InputGroup>
    </div>
  </div>
</template>

<script>
import { toRefs } from "vue";
export default {
  name: "InputFieldnew",
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
    icon: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const { label, type, modelValue, icon } = toRefs(props);
    const onInput = (event) => {
      //console.log("child", event.target.value);
      emit("update:modelValue", event.target.value);
    };

    return {
      label,
      type,
      modelValue,

      onInput,
      icon,
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
