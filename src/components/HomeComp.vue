<template>
    <HeaderComp />
    <h1>Hello {{name}}, Welcome on Home Page</h1>
    <table align="center" cellspacing="0">
        <tr class="head">
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Actions</th>
        </tr>
        <tr v-for="item in restaurants" :key="item.id" class="data">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.contact}}</td>
            <td>{{item.address}}</td>
            <td class="action">
                <router-link :to="'/update/'+item.id">Update</router-link>
                <button @click="deleteRestaurant(item.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios';
import HeaderComp from './HeaderComp.vue'
export default {
    name: "HomeComp",
    data(){
        return {
            name: '',
            restaurants: [],
        }
    },
    components:{
        HeaderComp
    },
    methods:{
        async deleteRestaurant(id){
            let result = await axios.delete("http://localhost:3000/restaurants/"+id);
            console.log(result)
            if(result.status==200){
                this.loadData();
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if(!user){
                this.$router.push({name: "SignUp"})
            }

            let result = await axios.get("http://localhost:3000/restaurants");
            this.restaurants = result.data;
        }
    },
    async mounted(){
        this.loadData();
    }
    
}
</script>
<style scoped>
.head{
    background-color: #999;
}
.data{
    background-color: #ddd;
}
td,th{
    padding: 15px 0;
    margin: 0%;
}
table{
    width: 70%;
    border-radius: 10%;
    border: 1px solid #fff;
    
}
.action a{
    text-decoration: none;
    background-color: #007BFF;
    padding: 8px 15px;
    color: white;
    border-radius: 5px;
    margin-right: 5px;
}
.action a:hover{
    opacity: .8;
}
.action button{
    background-color: #DC3545;
    padding: 8px 15px;
    font-size: 15px;
    color: white;
    border-radius: 5px;
    border: none;
}
.action button:hover{
    opacity: .8;
}
</style>