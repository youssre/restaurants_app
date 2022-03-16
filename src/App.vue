<template>
  <router-view />
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding: 0%;
  margin: 0%;
  background-color: #eee;
}
.logo{
    width: 100px;
    border-radius: 50%;
}
.register input,.login input,.add input{
    width: 300px;
    margin: 0 auto 30px;
    height: 40px;
    padding-left: 20px;
    display: block;
    border: 1px solid skyblue;
}
.register input:focus,.login input:focus,.add input:focus{
    outline: none;
}
.register button,.login button,.add button{
    width: 320px;
    height: 40px;
    background-color: skyblue;
    border: 1px solid skyblue;
    cursor: pointer;
    color: white;
}
.register button:hover,.login button:hover,.add button:hover{
    background-color: lightblue;
}
h1{
  color: #555;
}
</style>
