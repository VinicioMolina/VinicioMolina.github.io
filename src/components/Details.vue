<template>   

    <h1 class="">{{pokemon.name}}</h1>
    <h3>Type:</h3>
    <div class="row d-flex justify-content-center">
      <div  class="col-4 border border-secondary types_border " v-for="(value, index) in pokemon.types" :key="'value'+index">
          <div class="border" :class="pokemon.type.name" >
          <p class="  mx-1 my-1" :class="pokemon.type.name" >{{ value.type.name.toUpperCase() }} </p>
          </div>
      </div> 
    </div>
    <h3>Abilities</h3>
    <p v-for="(value, index) in pokemon.abilities"
          :key="'value'+index">
          {{ value.ability.name }} </p> 
      
    <img :src="'https://pokeres.bastionbot.org/images/pokemon/' + id + '.png'"  class=" " width="200" height="200" alt="">
    <div class="d-flex justify-content-center">
      <button @click="Close" class="btn btn-primary my-5"> Close</button>
    </div>
</template>

<script>
import Posts from '.././Views/Posts.vue'
export default {
    name: 'Details',
    props: [
      'url',
      'id'
      
    ],
    Components:{
      Posts
    },
    data: () => {
      return {
        pokemon: [],
        deta:'' 
      }
    },
    
    methods: {
        fetchData() {
        let req = new Request(this.url);
        fetch(req)
            .then((resp) => {
            if(resp.status === 200)
            return resp.json();
            })
            .then((data) => {
            this.pokemon= data;  
            })
          
          .catch((error) => {
              console.log(error);
            })
       
     
      },
      Close(){
        this.$emit('close');
      }     
    },
    created() {
      this.fetchData();
    }
}

</script>

<style>
  h1{
   text-transform: uppercase;
  }
  h2{
    text-transform: capitalize
  }
  
</style>