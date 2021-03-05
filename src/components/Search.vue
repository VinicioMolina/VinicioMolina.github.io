<template>

<p>You search for: {{pokemon_name}}</p>

    
    <div class="container"  >    
      <h1>{{pokemon.name}}</h1>
      <h3>Type</h3>
      <p  v-for="(value, index) in pokemon.types"
        :key="'value'+index">
        {{ value.type.name }} </p> 
      <h3>Abilities</h3>
      <p v-for="(value, index) in pokemon.abilities"
            :key="'value'+index">
            {{ value.ability.name }} </p> 
        
      <img :src="'https://pokeres.bastionbot.org/images/pokemon/' + pokemon.id + '.png'"  width="200" height="200" alt="">

      <button v-on:click="Close"> Close</button>
    </div>
</template>

<script>
import Posts from '.././Views/Posts.vue'
export default {
    name: 'Search',
    props: [
        'pokemon_name'
    ],
    Components: {
        Posts
      
    },
    data: () => {
      return {
        pokemon: [],
        deta:'', 
        error404:false
      }
    },
    
    methods: {
        fetchData() {
        let req = new Request("https://pokeapi.co/api/v2/pokemon/"+this.pokemon_name);
        fetch(req)
            .then((resp) => {
            if(resp.status === 404){
                this.error404=true
                this.Error404_Close()
            }
            if(resp.status === 200){
            return resp.json();
            }
            
            })


            .then((data) => {
            this.pokemon= data;  
            })
          
          .catch((error) => {
              console.log(error);
            })
       
     
      },
      Error404_Close(){
        alert("We don't have Pokemon data with that name")
        return this.$router.push('/')
        
      },
      Close(){
       this.$router.push('/')
      }     
    },
    created() {
      this.fetchData();
    }
}

</script>

<style>

</style>