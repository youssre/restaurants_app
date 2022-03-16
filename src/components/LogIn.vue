<template>
    <img class="logo" src="../assets/restaurant.jpg" alt="restaurant logo">
    <h1>LogIn</h1>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button @click="login">LogIn</button>
        <p>
            <router-link to="/sign-up">Sign Up</router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "LogIn",
    data(){

        return{
            email: '',
            password: ''
        }
    },
    methods:{
        async login(){
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            )
            console.warn(result)
            if(result.status==200 && result.data.length > 0){
                //localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name: "Home"})
            }else{
                alert("please enter a correct data!");
            }
        }
    },
   
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name: "LogIn"})
        }
    }
}
</script>
<style scoped>

</style>