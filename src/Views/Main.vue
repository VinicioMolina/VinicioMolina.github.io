<template>
  

  <div v-for="pokemon in pokemons.results" :key="pokemon.name">
    {{pokemon.name}}
  </div>  
</template>

<script>
import { ref } from "vue"
export default {

  name: "Main",

  async setup(){
    const pokemons = ref(null);
    const pokeResponse= await fetch("https://pokeapi.co/api/v2/pokemon");
    pokemons.value= await pokeResponse.json();
    
    return{
      pokemons
    }
  }
}
</script>

<style>

</style>