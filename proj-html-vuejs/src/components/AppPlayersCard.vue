
<script>


export default {
   name: 'AppPlayersCard',

   props: {
      card: {

      }
   },



   data() {
      return {

      }
   },

   methods: {
      
   },
}
</script>

<template lang="">
   <div class="cardContainer">
      <div class="card">
         <div class="imgCard">
            <img :src="card.imgUrl" alt="">
         </div>
         <h2 class="numbers">{{ card.title }}</h2>
         <h4 class="text">{{ card.text }}</h4>
      </div>
   </div>
</template>


<style lang="scss" >
   
   .card{
      width: 500px;
      height: 400px;
      background-color: black;

       img{
         width: 250px;
         height: 250px;
      }
   }

</style>