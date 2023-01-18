
<script>
export default {
   
}
</script>

<template lang="">
   <div class="containerMatch text-center">
      <h1 class="p-3" >
         Upcoming Matchs
      </h1>
      <div class="container">
         <div class="matchBanner">

         </div>
         <div class="matchBanner">

         </div>
         <div class="matchBanner">

         </div>  
         <div class="matchBanner">

         </div> 
         <div class="matchBanner">

         </div>
      </div>
   </div>
   <div class="containerPlayers">

   </div>

   <div class="containerTable">
      <div class="leagueTable">

      </div>
      <div class="resultTable">
         
      </div>

   </div>

   <div class="adv-imgBet">

   </div>

   <div class="blackAdvBanner">

   </div>

   <div class="containerSliderCard">
      <div class="UppperContainer">

      </div>
      <div class="cardContainer">

      </div>
   </div>


</template>


<style lang="scss">
   .containerMatch{
      height: 120vh;
      background-color: crimson;

      .matchBanner{
         height: 15vh;
         background-color: rgba(139, 0, 0, 0.632);
         margin-bottom: 2rem;
      }

   }

   .containerPlayers{
      height: 60vh;
      background-color: darksalmon;
   }

   .containerTable{
      height: 85vh;
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


   }

   .adv-imgBet{
         height: 20vh;
         background-color: forestgreen;
      }

   .blackAdvBanner{
      height: 25vh;
      background-color: black;
   }

   .containerSliderCard{
      height: 95vh;
      background-color: lightcoral;

      .UppperContainer{
         height: 20vh;
         background-color: rgba(158, 9, 9, 0.608);
      }

      .cardContainer{
         height: 75vh;
         background-color: rgba(0, 0, 128, 0.579);
      }
   }
</style>
