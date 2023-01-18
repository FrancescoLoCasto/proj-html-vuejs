
<script>
export default {
   
}
</script>

<template lang="">
   <div class="containerMatch">
      
   </div>
   <div class="containerPlayers">

   </div>

   <div class="containerTable">
      <div class="leagueTable">

      </div>
      <div class="resultTable">
         
      </div>
      <div class="banner-img">

      </div>
   </div>
</template>


<style lang="scss">
   .containerMatch{
      height: 120vh;
      background-color: crimson;
   }

   .containerPlayers{
      height: 60vh;
      background-color: darksalmon;
   }

   .containerTable{
      height: 100vh;
      background-color: rgb(201, 57, 9);
      display: flex;

      .leagueTable{
         height: 75vh;
         width: 45%;
         background-color: rgba(137, 43, 226, 0.467);
         margin: 2rem;
      }

      
      .resultTable{
         height: 75vh;
         width: 45%;
         background-color: rgba(43, 226, 119, 0.395);
         margin: 2rem;
      }

      .banner-img{
         height: 20vh;
         background-color: forestgreen;
      }
   }
</style>
