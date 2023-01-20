
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
         <div class="textCard">
            <h2 class="numbers">{{ card.title }}</h2>
            <h4 class="text">{{ card.text }}</h4>
         </div>
      </div>
   </div>
</template>


<style lang="scss" >

   .cardContainer{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .card{
      width: 300px;
      height: 370px;
      background-color: #9b51e0;
      text-align: center;
      border-radius: 2rem;


         .textCard{
            margin-bottom: 2rem;
            color: white;
            background-color: #9b51e0;
            border-radius: 2rem;

         }

         img{
            width: 300px;
            height: 270px;
            border-top-left-radius: 2rem; 
            border-top-right-radius: 2rem; 

         }
      }
   }
   


</style>