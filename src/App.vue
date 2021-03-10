<template >
<div class="container-all font-weight-bold">
          <Navbar/>

          <router-view />

 
</div> 
</template>

<script>

//import Posts from './Views/Posts.vue'
import Navbar from '../src/components/Navbar.vue' 


export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  .container-all{
    background:url("./assets/Images/background.png") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  }
</style>
