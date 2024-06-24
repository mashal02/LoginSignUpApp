<template>
  <div>
    <div class="col-lg" id="heading">Log In</div>
    <div class="container-md">
      <form @submit.prevent="handleLogin">
        <Inputfield
          label="Username"
          type="text"
          v-model="username"
          @blur="v$.username.$touch"
          :errorMessage="usernameError"
        ></Inputfield>
        <Inputfield
          label="Password"
          type="password"
          v-model="password"
          @blur="v$.password.$touch"
          :errorMessage="passwordError"
        />
        <!-- 
        <InputText v-model="password" :invalid="password == ''" />

        <Inputfieldnew
          label="Username"
          type="text"
          v-model="username"
          icon="@"
        ></Inputfieldnew> -->

        <Button
          label="Submit"
          Submit
          :loading="StoreloggedInUser.loading"
          type="submit"
        />
        <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
      </form>
      <div class="alert alert-danger" role="alert" v-if="isInvalid">
        Invalid Credentials
      </div>
    </div>
    <div id="helpcontainer">
      <button class="btn" id="help" v-on:click="help()">Forgot Password</button>
      <p id="helptext" style="display: none">
        Change in Password not supported by Dummy JSON
      </p>
    </div>
  </div>
</template>

<script>
//imports
import Inputfield from "../components/InputField.vue";
import Inputfieldnew from "../components/inputfieldnew.vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { ref, computed } from "vue";
//import { useAuth } from "../composables/Auth";
import { useRouter } from "vue-router";
import { useloggedinuserStore } from "../store/LoggedInUser";

export default {
  name: "LoginFormComp",
  setup() {
    const username = ref("emilys");
    const password = ref("emilyspass");
    const isInvalid = ref(false);
    // const { token, isInvalid, login } = useAuth();
    const router = useRouter();
    const StoreloggedInUser = useloggedinuserStore();

    const usernameError = computed(() => {
      if (v$.value.username.required.$invalid && v$.value.username.$dirty) {
        return "Username is required";
      }
    });
    const passwordError = computed(() => {
      if (v$.value.password.required.$invalid && v$.value.password.$dirty) {
        return "Password is required";
      }
    });

    const rules = computed(() => ({
      username: {
        required,
      },
      password: {
        required,
      },
    }));

    const v$ = useVuelidate(rules, {
      username,
      password,
    });

    const handleLogin = async () => {
      v$.value.$validate();
      if (v$.value.$error) {
        console.log("Validation failed");
        loading.value = false;
        return;
      }
      console.log(username.value, password.value);
      //const res = await login(username.value, password.value);

      isInvalid.value = await StoreloggedInUser.login(
        StoreloggedInUser,
        username.value,
        password.value
      );
      if (!isInvalid.value) {
        router.push("/profile");
      }
    };
    return {
      username,
      password,
      //  token,
      usernameError,
      passwordError,
      isInvalid,
      v$,
      handleLogin,
      StoreloggedInUser,
    };
  },
  components: {
    Inputfield,
    Inputfieldnew,
  },

  methods: {
    help() {
      alert("Change in Password not supported.");
    },
  },
};
</script>

<style scoped>
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

.container-md {
  margin-top: 40px;
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 30%;
  margin-bottom: 20px;
  border: none;
}

.btn {
  background-color: darkmagenta;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
}
.btn:hover {
  background-color: rgb(7, 108, 59);
  color: white;
}
.alert {
  margin-top: 20px;
}
#heading {
  margin-top: 40px;
  text-align: center;
  color: #14361f;
  font-size: xxx-large;
}

#helpcontainer {
  display: flex;
  align-items: center;
  flex-direction: column;
}

#help {
  text-align: center;
  color: rgb(0, 121, 105);
  background-color: #ffffff;
  font-size: larger;
  margin-top: 20px;
  border-bottom: rgb(0, 121, 105) 3px solid;
  border-radius: 0px;
}

#helptext {
  margin-top: 20px;
  color: #144d26;
  font-size: large;
}
</style>
