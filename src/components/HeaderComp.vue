<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <a class="last" @click="logout" href="#">LogOut</a>
    </div>
</template>
<script>
export default {
    name: 'headerComp',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name: 'LogIn'})
        }
    }

}
</script>
<style>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a{
    transition: all 1s;
    float: left;
    padding: 14px 16px;
    color: #f2f2f2;
    font-size: 17px;
    margin-right: 5px;
    text-decoration: none;
    text-align: center;
}
.nav a:last-child{
    float: right;
}
.nav a:hover{
    background-color: #eee;
    color: #333;
}
</style>