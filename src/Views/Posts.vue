<template>

    <div class="container d-flex justify-content-center">
  
      <div class="row">
        <div class="col-4 " v-if="det" >
            <Details :url= "url" :id= "pokemonId" :det= 'det' @Close="Close" /> 
        </div>
        
        <div class="col-md border rounded-4 mx-2 my-2 py-2 px-2 d-flex justify-content-center" v-else v-for="pokemon in pokemons" :key="pokemon.name" @click="displayInfo(pokemon.url, pokemon.id)" >
          <div class="col-12 border rounded-circle bg-light mx-2 my-2">
            <p>{{pokemon.id}}</p>
            <img class="ml-4" :src="'https://pokeres.bastionbot.org/images/pokemon/' + pokemon.id + '.png'" width="100" height="100" alt=""> 
            <p class="d-flex justify-content-center my-2">{{ pokemon.name.toUpperCase() }}</p>
          </div>
     
          
        </div>

      </div>
    </div>
  
</template>

<script>
  import Details from '.././components/Details.vue'
  
  export default {
    name: "Posts",
  
    props: [
      
    ],
    components: {
      Details,
 
      
    },
    data: () => {
      return {
        pokemons: [],
        det: false,
        url:'',
        pokemonId:''
      }
    },
    
    methods: {
      Close(){
        this.det= false;
        
      },
      fetchData() {
        let req = new Request("https://pokeapi.co/api/v2/pokemon?limit=150");
        fetch(req)
          .then((resp) => {
            if(resp.status === 200)
              return resp.json();
          })
          .then((data) => {
              data.results.forEach(pokemon => {
              pokemon.id = pokemon.url.split('/')
                .filter(function(part) { return !!part }).pop();
              this.pokemons.push(pokemon);
            });
          })
          .catch((error) => {
            console.log(error);
          })
      },
      displayInfo(url, id) {
          this.det= true;
          this.url = url;
          this.pokemonId= id;

      }
    },
    created() {
      this.fetchData();
    }


  }
</script>

<style>


</style>

