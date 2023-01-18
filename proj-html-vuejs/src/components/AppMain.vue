
<script>
export default {
   
}
</script>

<template lang="">
   <div class="containerMatch text-center">
      <h1 class="p-5 text-light" >
         Upcoming Matchs
      </h1>
      <div class="container">
         <div class="matchBanner">
               <div class="squadOne">
                  <img src="../assets/img/club-3.png" alt="">
                  <h4>
                     Schalke Club
                  </h4>
               </div>
               <h1>
                  VS
               </h1>
               <div class="squadTwo">
                  <h4>
                     Inter Club
                  </h4>
                  <img src="../assets/img/club-4.png" alt="">
               </div>

            
         </div>
         


         <div class="matchBanner">
            <div class="squadOne">
               <img src="../assets/img/club-9.png" alt="">
               <h4>
                  Atletico Club 
               </h4>
            </div>
            <h1>
               VS
            </h1>
            <div class="squadTwo">
               <h4>
                  Schalke Club
               </h4>
               <img src="../assets/img/club-6.png" alt="">
            </div>
         </div>

         <div class="matchBanner">
            <div class="squadOne">
               <img src="../assets/img/club-2.png" alt="">
               <h4>
                  United Fs Club 
               </h4>
            </div>
            <h1>
               VS
            </h1>
            <div class="squadTwo">
               <h4>
                  Bayern Club
               </h4>
               <img src="../assets/img/club-8.png" alt="">
            </div>
         </div>

         <div class="matchBanner">
            <div class="squadOne">
               <img src="../assets/img/club-7.png" alt="">
               <h4>
                  Arsenal Club
               </h4>
            </div>
            <h1>
               VS
            </h1>
            <div class="squadTwo">
               <h4>
                  Atletico Club
               </h4>
               <img src="../assets/img/club-9.png" alt="">
            </div>
         </div>

         <div class="matchBanner">
            <div class="squadOne">
               <img src="../assets/img/club-1.png" alt="">
               <h4>
                  Istanbul Sports 
               </h4>
            </div>
            <h1>
               VS
            </h1>
            <div class="squadTwo">
               <h4>
                  United Fs Club
               </h4>
               <img src="../assets/img/club-2.png" alt="">
            </div>
         </div>
      </div>

   </div>
   <div class="containerPlayers">
      <h1>
         Players
      </h1>

      
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
      height: 140vh;
      background-image: url(../assets/img/saha.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      


      .matchBanner{
         display: flex;
         padding-left: 15rem;
         height: 20vh;
         background-color: rgba(0, 0, 0, 0.3);
         margin-bottom: 2rem;


         h1{
            font-size: 4rem;
            color: white;
            margin-top: 2.5rem;
         }

         .squadOne{
            display: flex;
            width: 40%;
            h4{
               margin-top: 2.5rem;
               font-size: 2.5rem;
               color: white;
               font-weight: 700;
            }
         }

         
         .blackDate{
            height: 1rem;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.582);
            color: white;
         }

         .squadTwo{
            display: flex;
            width: 50%;

            h4{
               margin-top: 2.5rem;

               margin-left: 3rem;
               font-size: 2.5rem;
               color: white;
               font-weight: 700;
            }
         }
      }

   }

   .containerPlayers{
      height: 60vh;
      background-image: url(../assets/img/player.jpg);
      color: white;

      h1{
         padding: 2rem;
         text-align: center;
         font-size: 3rem;
         font-weight: 700;
      }


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
