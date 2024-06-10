<template>
    <div class="container">
    <div id="leftblock"></div>
   <h1> Welcome {{name}}!</h1>
    
    <div id="rightblock">
        <h3>Your Profile</h3>
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
        <p>Gender: {{ gender }}</p>
        <p>Company: {{ company }}</p>
        
        
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
           name: '',
           email: '', 
           gender: '', 
           company: '',
           token: ''

        }
    }
,
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push('/');
        },
        getdatabyToken(){
            if(localStorage.getItem('token')){      

            this.token=localStorage.getItem('token');
            fetch('https://dummyjson.com/auth/me', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + this.token, 
            }, 
            })
            .then(res => res.json())
            .then(res => {
                if(res){
                    this.name= res.firstName,
                    this.email= res.email,
                    this.gender=res.gender;
                    this.company= res.company.name;
                    this.token = res.token
                }})
            }
            else{
                    this.name= localStorage.getItem('name'),
                    this.email= localStorage.getItem('email'),
                    this.gender= localStorage.getItem('gender');
                    this.company= localStorage.getItem('company');
                }
            }
        },
    
        mounted() {
            this.getdatabyToken();
        }
    }
</script>

<style>
#rightblock{
    margin: 80px auto;
    width:50%;
    max-width: 800px;
    padding: 20px;
    background-color: white;
    border-width: 0px 0px 4px 0px ;
    border-left: solid rgb(3, 87, 43); 
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: left;
}

#leftblock{
    margin: 80px auto;
    max-width: 800px;
    padding: 20px;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: right;
}
.container{

    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>