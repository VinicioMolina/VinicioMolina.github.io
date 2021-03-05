<template >
    <nav class=" header navbar navbar-expand-lg navbar-light bg-light sticky-top ">
         <span class="navbar-brand mb-0 ">  <router-link to="/"><img src=".././assets/Images/pokedex_logo.png" alt=""  width="120" height="50"></router-link> </span>
        <span class="mx-auto">
            <input type="text" id="poke" class=""> 
            <button class="btn btn-primary" @click="search_Pokemon"> 
                Search
            </button>  
        </span>
        <span class="  navbar-brand mb-0 h1 mx-auto">  <router-link to="/Docs">Docs</router-link> </span>
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