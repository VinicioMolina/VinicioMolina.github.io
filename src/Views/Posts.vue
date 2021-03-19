<template>

    <div class="container">
      <div class="row d-flex ">

        <div class="col-sm-6 border border-secondary rounded mt-5 px-5 card-color " v-if="det" >
            <Details :url= "url" :id= "pokemonId" :det= 'det' @Close="Close" />
        </div>

        <div class="col-sm-2 text-center " v-else v-for="pokemon in pokemons" :key="pokemon.name" @click="displayInfo(pokemon.url, pokemon.id)" >


          <div class="col-sm-12 post mt-5 py-2 mb-2 bg-cards text-light">
            
                
                <h5 class="d-flex justify-content-center my-2 shadow-">{{ pokemon.name.toUpperCase() }}</h5>
                <img class="mb-3" :src="'https://pokeres.bastionbot.org/images/pokemon/' + pokemon.id + '.png'" width="130" height="130" alt="">
                
            <div class="py-3 type_background rounded-circle mx-auto shadow-lg" :class=" pokemon.type ">


                <img class=""  :src="require('.././assets/Images/types/'+pokemon.type+'.svg')" width="30" height="30" alt="">
     

            </div>
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
        pokemonId:'',
        
      }
    },

    methods: {
      Close(){
        this.det= false;

      },
      fetchData() {
        var pokemonType= '';

        let req = new Request("https://pokeapi.co/api/v2/pokemon?limit=150");
        fetch(req)
          .then((resp) => {
            if(resp.status === 200)
              return resp.json();
          })
          .then((data) => {
              data.results.forEach(pokemon => {
                let reqType = new Request(pokemon.url);
                fetch(reqType)
                .then((resp) => {
                  if(resp.status === 200)
                  return resp.json();
                })
                .then((data) => {
                  pokemonType =data.types[0].type.name
                  pokemon.type=pokemonType
                  pokemon.id= data.id
                  this.pokemons.push(pokemon);
                  // console.log("esto es dentro de then((data))" + this.pokemonType)     
                })

              
//              pokemon.type= pokemonType
              console.log("fuera:" + pokemon.type) 
              // pokemon.id = pokemon.url.split('/')
              //   .filter(function(part) { return !!part }).pop();
 
              //  this.pokemons.push(pokemon);
             
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

