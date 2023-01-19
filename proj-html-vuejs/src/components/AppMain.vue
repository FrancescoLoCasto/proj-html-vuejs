
<script>
import { store } from '../store';
import AppPlayersCard from '../components/AppPlayersCard.vue';
import AppArticleCard from '../components/AppArticleCard.vue';


export default {
   name: 'AppMain',

   components: {
      AppPlayersCard,
      AppArticleCard

   },

   data() {
      return {
         store,
      }
   },
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

      
      <div class="cardContainer d-flex">
         <AppPlayersCard v-for="(card) in store.cardsPlayers" :card="card" />
      </div>

      <div class="BlackButtonPlayer">
         <div class="textbutton">
            <h4>
            View All Players
            </h4>
         </div>
      </div>

   </div>

   <div class="containerTable">
      <div class="leagueTable">

      </div>
      <div class="resultTable">
         
      </div>

   </div>

   <div class="adv-imgBet">
      <img src="../assets/img/reklam.jpg" alt="">
   </div>

   <div class="blackAdvBanner d-flex">
      <div class="blackCube">
         <img src="../assets/img/client2.png" alt="">
      </div>
      <div class="blackCube">
         <img src="../assets/img/client3.png" alt="">
      </div>
      <div class="blackCube">
         <img src="../assets/img/client4.png" alt="">
      </div>
      <div class="blackCube">
         <img src="../assets/img/client7.png" alt="">
      </div>
      <div class="blackCube">
         <img src="../assets/img/client9.png" alt="">
      </div>
      <div class="blackCube">
         <img src="../assets/img/client10.png" alt="">
      </div>
   </div>

   <div class="containerSliderCard">
      <div class="UppperContainer">
         <div class="imgThubs">
            <img src="../assets/img/thumbs-up.png" alt="">
         </div>
         <h1>
            Resent New & Articles
         </h1>
         <h4>
            Be aware of the football world
         </h4>
      </div>
      <div class="cardContainer">
         <AppArticleCard v-for="(cardArt) in store.cardsArticle" :cardArt="cardArt" />
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
      height: 80vh;
      background-image: url(../assets/img/player.jpg);
      color: white;

      h1{
         padding: 2rem;
         text-align: center;
         font-size: 3rem;
         font-weight: 700;
      }

      .BlackButtonPlayer{
         margin: 0 auto;
         margin-top: 7rem;
         text-align: center;
         padding: 1rem;
         width: 20rem;
         background-color: black;
         border: 1px solid white;
         border-radius: 2rem;


         h4{
            font-weight: 700;
         }

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
         height: 25vh;
         img{
            margin-left: 15rem;
            height: 20vh;
         }
      }

   .blackAdvBanner{
      height: 30vh;
      background-color: black;
      padding-top: 1.5rem;

      .blackCube{
         
         margin: 2rem;
         width: 250px;
         height: 170px;
         border: 1px solid white;
         border-radius: 2rem;
      }

   }

   .containerSliderCard{
      height: 120vh;
      background-color: lightcoral;

      .UppperContainer{
         height: 30vh;
         background-color: #fbfbfb;

         h1{
            margin-top: 1rem;
            text-align: center;
            font-weight: 700;
         }
         

         h4{
            text-align: center;
            font-weight: 200;
            font-size: 1rem;
         }

         .imgThubs img{
            height: 8rem;
            margin-left: 55rem;
            margin-top: 3rem;
         }
      }

      .cardContainer{
         height: 75vh;
         background-color: rgba(0, 0, 128, 0.579);
      }
   }
</style>
