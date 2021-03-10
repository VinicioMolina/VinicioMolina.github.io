<template >
<nav class="navbar navbar-expand-lg   navbarA py-4 shadow-lg">
  <router-link to="/"><img src=".././assets/Images/pokedex_logo.png" alt=""  width="120" height="50"></router-link>
 
 
  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto ">
  
      <li class=" ml-5 nav-link shadow-sm">
        <router-link class="text-light " to="/Docs" >Docs</router-link>
      </li>

    </ul>
   <input type="text" id="poke" class=""> 
            <button class="btn btn-outline-success my-2 my-sm-0 shadow-lg" @click="search_Pokemon"> 
                Search
    </button>  
  </div>
</nav>
      
</template>

<script>
 export default {
    name: 'Navbar',

       data: () => {
      return {
        poke_name:''
      }
    },
    
    methods: {
      search_Pokemon(){
          if(document.getElementById('poke').value == ''){
              alert("You must to write a Pokemon name")

          }
          else{
            this.poke_name= document.getElementById("poke").value.toLowerCase();
            document.getElementById('poke').value = ''

            this.$router.push('/Search?pokemon_name='+this.poke_name)

        }
      },
 
    }
 }
</script>

<style>

</style>