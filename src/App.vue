<template>

          <Navbar/>

          <router-view />

 
 
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

</style>
