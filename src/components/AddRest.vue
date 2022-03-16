<template>
    <HeaderComp />
    <h1>Hello {{username}}, Welcome on Add Restaurant Page</h1>
    <form class="add">
        <input type="text" name="name" placeholder="Enter Name" v-model="restaurant.name">
        <input type="text" name="address" placeholder="Enter Address" v-model="restaurant.address">
        <input type="text" name="contact" placeholder="Enter Contact" v-model="restaurant.contact">
        <button type="button" @click="addRestaurant">Add New Restaurant</button>
    </form>
</template>
<script>
import HeaderComp from './HeaderComp.vue';
import axios from 'axios'
export default {
    name: "HomeComp",
    components:{
        HeaderComp
    },
    data(){

        return{
            username: '',
           restaurant:{
                name: '',
                address: '',
                contact: ''
           }
        }
    },
    methods:{
        async addRestaurant(){
            console.log(this.restaurant);
            const result = await axios.post('http://localhost:3000/restaurants',{
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            })
            console.warn(result)
            if(result.status==201){
                this.$router.push({name: 'Home'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        this.username = JSON.parse(user).name;
        if(!user){
            this.$router.push({name: "addRest"})
        }
    }
}
</script>
<style scoped>

</style>