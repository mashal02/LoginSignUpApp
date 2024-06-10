
<template>
<div class="col-lg"   id="heading">Welcome!</div>   
    
 <div class ="container-md">
   
    <form v-on:submit.prevent="handleSubmit">
        <div class="mb-3">
          <label class="form-label"  >Email Address</label>
          <input required type="email" class="form-control" v-model="email">
        </div>
        <div class="mb-3" >
            <label class="form-label" >Name</label>
            <input required type="text" class="form-control" v-model="name">
          </div>
        <div class="mb-3">
        <label class="form-label">Gender</label>
        <select required class="form-control" v-model="Gender">
            <option value="" disabled selected>Select your Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
      </div>
      <div class="mb-3" >
            <label class="form-label" >Company</label>
            <input required type="text" class="form-control" v-model="comp">
          </div>
     
        <div class="mb-3" >
          <label  class="form-label" >Password</label>
          <input required type="password"  class="form-control" v-model="password">
        </div>
        <div class="mb-3" >
            <label  class="form-label" >Confirm Password</label>
            <input required type="password" class="form-control" v-model="password2">
          </div>
        <div class="mb-3 form-check" >
          <input type="checkbox" class="form-check-input" v-model="checkbox">
          <label required class="form-check-label" for="exampleCheck1">I agree to the <a href="https://google.com">Terms and Conditions</a></label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

    <div id="helpcontainer">
      <button class="btn col-md-1" id="help" @click="help()" onmouseover="this.innerHTML='Click Me'" onmouseout="this.innerHTML='Help'">
        Help
      </button>
    </div>

</template>

<script>
export default {

    data () {
        return {
            email: '',
            name: '',
            password: '',
            password2: '',
            checkbox: false,
            Gender: '' ,
            comp: ''

        }
    },
    methods: {
        
        help: function() {
            alert("Please enter your email address, name, password, confirm password, genderand agree to the terms and conditions to sign up.");
        },
        confirm: function() {
            if (this.password != this.password2) {
                alert("Passwords do not match. Please try again.");
            }
        }, 

        handleSubmit() {
            this.confirm();
            if (this.password === this.password2) {
                this.savetolocalstorage();
                console.log('Form submitted');
                this.$router.push({ name: 'login' });
            }
        }
            ,
        savetolocalstorage () {
            localStorage.setItem('email', this.email);
            localStorage.setItem('name', this.name);
            localStorage.setItem('password', this.password);
            localStorage.setItem('gender', this.Gender);
            localStorage.setItem('company', this.comp);
            
    }
}
}
</script>

<style >

*
{
font-family: Arial, Helvetica, sans-serif;
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
background-color: #f2f2f2;
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
width:30%;
margin-bottom: 20px;
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