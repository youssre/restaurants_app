<template>
    <img class="logo" src="../assets/restaurant.jpg" alt="restaurant logo">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button @click="signUp">Sign Up</button>
        <p>
            <router-link to="/login">LogIn</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "signUp",
    data(){

        return{
            name : '',
            email: '',
            password: ''
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("http://localhost:3000/user",{
                email: this.email,
                name: this.name,
                password: this.password
            })
            
            if(result.status==201){
                localStorage.setItem("user-info",JSON.stringify(result.data));
                this.$router.push({name: 'LogIn'})
                
            }
        }
    },
     mounted() {
        let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name: "SignUp"})
            }
    }


}
</script>
<style>

</style>