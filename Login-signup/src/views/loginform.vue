<template>
  <div>
    <div class="col-lg"   id="heading">Log In</div>   
    
 <div class ="container-md">
   
    <form @submit.prevent="handleLogin">
        
        <div class="mb-3" >
            <label class="form-label" >Username</label>
            <input type="text" class="form-control" v-model="email">
          </div>
        <div class="mb-3" >
          <label  class="form-label" >Password</label>
          <input type="password" class="form-control" v-model="password">
        </div>
       
        <button type="submit"  class="btn btn-primary">Submit</button>
      </form>
    </div>

    <div id="helpcontainer">
      <button class="btn" id="help" v-on:click="help()" onmouseover="this.innerHTML='Click Me'" onmouseout="this.innerHTML='Forgot Password'">
        Forgot Password
      </button> 
      <p id="helptext" style="display:none">Change in Password not supported by Dummy JSON </p>
    </div>


  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
     email:'emilys',
     password: 'emilyspass',
      token: ''
    };
  },
  methods: {
    handleLogin() {
      fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: this.email,
        password: this.password,

      })
    })
      .then(res => res.json())
      .then(res => { 
        if (res) {
          this.token = res.token;
          localStorage.setItem('token', res.token);
          this.$router.push('/profile');
        }  
        else {
          alert('Invalid credentials');
        }});
      
      },
      help(){
        alert('Change in Password not supported. You can create new account by Sign Up')
      },
}
};
</script>

<style >

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
.col-sm {
    background-color: #f2f2f2;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width:20%;
}



.container-md{
margin-top: 40px;
background-color: #ffffff;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
width:30%;
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

#heading {
    margin-top: 40px;
text-align: center;
    color: #14361f;
    font-size: xxx-large;
}

#helpcontainer
{
    display: flex;
    align-items: center;
    flex-direction:column;
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