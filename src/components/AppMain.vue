
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
      <!-- Upcoming match -->
      <div class="container slide-in-elliptic-top-fwd" data-aos="zoom-in">
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
         <div class="underBanner d-flex">
            <div class="calendar d-flex">
            <i class="fa-regular fa-calendar-days"></i>
            <h5>October 20, 2022 17:00 pm</h5>
         </div>
         
         <div class="plus d-flex">
            <i class="fa-solid fa-circle-plus"></i>
            <h5>Expert Stadium</h5>
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
         <div class="underBanner d-flex">
         <div class="calendar d-flex">
            <i class="fa-regular fa-calendar-days"></i>
            <h5>September 18, 2022 21:00 pm</h5>
         </div>
         
         <div class="plus d-flex">
            <i class="fa-solid fa-circle-plus"></i>
            <h5>Expert Stadium</h5>
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
         <div class="underBanner d-flex">
         <div class="calendar d-flex">
            <i class="fa-regular fa-calendar-days"></i>
            <h5>August 3, 2022 19:00 pm</h5>
         </div>
         
         <div class="plus d-flex">
            <i class="fa-solid fa-circle-plus"></i>
            <h5>Expert Stadium</h5>
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
         <div class="underBanner d-flex">
         <div class="calendar d-flex">
            <i class="fa-regular fa-calendar-days"></i>
            <h5>July 8, 2022 12:00 pm</h5>
         </div>
         
         <div class="plus d-flex">
            <i class="fa-solid fa-circle-plus"></i>
            <h5>Expert Stadium</h5>
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
         <div class="underBanner d-flex">
         <div class="calendar d-flex">
            <i class="fa-regular fa-calendar-days"></i>
            <h5>June 12, 2022 09:00 am</h5>
         </div>
         
         <div class="plus d-flex">
            <i class="fa-solid fa-circle-plus"></i>
            <h5>Expert Stadium</h5>
         </div>
         </div>         
      </div>

   </div>

   <!-- Players Card -->
   <div class="containerPlayers">
      <h1>
         Players
      </h1>

      
      <div class="cardContainer d-flex">
         <AppPlayersCard v-for="(card) in store.cardsPlayers" :card="card"  />
      </div>

      <div class="BlackButtonPlayer shake-horizontal">
         <div class="textbutton">
            <h4>
            View All Players
            </h4>
         </div>
      </div>

   </div>

   <!-- Table league and result -->

   <div class="containerTable text-focus-in">
      <div class="leagueTable">
         <div class="titleOne text-center">
            <h1>League Table</h1>
         </div>

         <div class="topTable d-flex">
            <div class="LeftTable">
               <h1>
                  Team
               </h1>
            </div>
            <div class="RightTable d-flex">
               <h1>
                  W
               </h1>
               <h1>
                  D
               </h1>
               <h1>
                  L
               </h1>
               <h1>
                  PTS
               </h1>
            </div>
         </div>


         <div class="bannerMatch d-flex">
            <div class="leftBanner d-flex">
               <h4>
                  1
               </h4>
               <img src="../assets/img/league-club-1.png" alt="">
               <h4>
                  Istanbul Sports
               </h4>
            </div>
            <div class="rightBanner d-flex">
               <h4>
                  18
               </h4>

               <h4>
                  2
               </h4>

               <h4>
                  0
               </h4>

               <h4 class="fw-bolder">
                  42
               </h4>
            </div>
         </div>

         <div class="bannerMatch d-flex ">
            <div class="leftBanner d-flex">
               <h4>
                  2
               </h4>
               <img src="../assets/img/league-club-2.png" alt="">
               <h4>
                  United Fs Club
               </h4>
            </div>
            <div class="rightBanner d-flex">
               <h4>
                  14
               </h4>

               <h4>
                  2
               </h4>

               <h4>
                  1
               </h4>

               <h4 class="fw-bolder">
                  35
               </h4>
            </div>
         </div>   

         <div class="bannerMatch d-flex">
            <div class="leftBanner d-flex">
               <h4>
                  3
               </h4>
               <img src="../assets/img/league-club-3.png" alt="">
               <h4>
                  Schalke Club
               </h4>
            </div>
            <div class="rightBanner d-flex">
               <h4>
                  13
               </h4>

               <h4>
                  3
               </h4>

               <h4>
                  0
               </h4>

               <h4 class="fw-bolder">
                  32
               </h4>
            </div>
         </div>  

         <div class="bannerMatch d-flex">
            <div class="leftBanner d-flex">
               <h4>
                  4
               </h4>
               <img src="../assets/img/league-club-4.png" alt="">
               <h4>
                  Inter Club
               </h4>
            </div>
            <div class="rightBanner d-flex">
               <h4>
                  13
               </h4>

               <h4>
                  2
               </h4>

               <h4>
                  1
               </h4>

               <h4 class="fw-bolder">
                  31
               </h4>
            </div>
         </div>  

         <div class="bannerMatch d-flex">
            <div class="leftBanner d-flex">
               <h4>
                  5
               </h4>
               <img src="../assets/img/league-club-5.png" alt="">
               <h4>
                  Madrid Club
               </h4>
            </div>
            <div class="rightBanner d-flex">
               <h4>
                  12
               </h4>

               <h4>
                  1
               </h4>

               <h4>
                  2
               </h4>

               <h4 class="fw-bolder">
                  30
               </h4>
            </div>
         </div>  

         <div class="bannerMatch d-flex">
            <div class="leftBanner d-flex">
               <h4>
                  6
               </h4>
               <img src="../assets/img/league-club-6.png" alt="">
               <h4>
                  Schalke Club
               </h4>
            </div>
            <div class="rightBanner d-flex">
               <h4>
                  11
               </h4>

               <h4>
                  0
               </h4>

               <h4>
                  3
               </h4>

               <h4 class="fw-bolder">
                  28
               </h4>
            </div>
         </div>  

         <div class="bannerMatch d-flex">
            <div class="leftBanner d-flex">
               <h4>
                  7
               </h4>
               <img src="../assets/img/league-club-7.png" alt="">
               <h4>
                  Arsenal Club
               </h4>
            </div>
            <div class="rightBanner d-flex">
               <h4>
                  10
               </h4>

               <h4>
                  5
               </h4>

               <h4>
                  0
               </h4>

               <h4 class="fw-bolder">
                  26
               </h4>
            </div>
         </div>  

         <div class="bannerMatch d-flex">
            <div class="leftBanner d-flex">
               <h4>
                  8
               </h4>
               <img src="../assets/img/league-club-8.png" alt="">
               <h4>
                  Bayern Club
               </h4>
            </div>
            <div class="rightBanner d-flex">
               <h4>
                  10
               </h4>

               <h4>
                  2
               </h4>

               <h4>
                  2
               </h4>

               <h4 class="fw-bolder">
                  24
               </h4>
            </div>
         </div>  

         <div class="bannerMatch d-flex">
            <div class="leftBanner d-flex">
               <h4>
                  9
               </h4>
               <img src="../assets/img/league-club-9.png" alt="">
               <h4>
                  Atletico Club
               </h4>
            </div>
            <div class="rightBanner d-flex">
               <h4>
                  19
               </h4>

               <h4>
                  0
               </h4>

               <h4>
                  4
               </h4>

               <h4 class="fw-bolder">
                  20
               </h4>
            </div>
         </div>  

         <div class="ViewButton">
            <h4>
               View Full League Table
            </h4>
         </div>
      </div>



      <div class="resultTable">
         <div class="titleTwo text-center">
            <h1>Fixtures & Results</h1>
         </div>

         <div class="resultBannerOne d-flex">
            <img src="../assets/img/league-club-1.png" alt="">
            <h4>Instabul Sports</h4>
            <h1>VS</h1>
            <h4>United Fs Club</h4>
            <img src="../assets/img/league-club-2.png" alt="">
         </div>
         <div class="resultBannerTwo d-flex">
            <img src="../assets/img/league-club-3.png" alt="">
            <h4>Schalke Club</h4>
            <h1>VS</h1>
            <h4>Inter Club</h4>
            <img src="../assets/img/league-club-4.png" alt="">
         </div>
         <div class="resultBannerOne d-flex">
            <img src="../assets/img/league-club-5.png" alt="">
            <h4>Madrid Club</h4>
            <h1>VS</h1>
            <h4>Schalke Club</h4>
            <img src="../assets/img/league-club-6.png" alt="">
         </div>
         <div class="resultBannerTwo d-flex">
            <img src="../assets/img/league-club-7.png" alt="">
            <h4>Arsenal Club</h4>
            <h1>VS</h1>
            <h4>Bayern Club</h4>
            <img src="../assets/img/league-club-8.png" alt="">
         </div>
         <div class="resultBannerOne d-flex">
            <img src="../assets/img/league-club-9.png" alt="">
            <h4>Atletico Club</h4>
            <h1>VS</h1>
            <h4>Istanbul Club</h4>
            <img src="../assets/img/league-club-1.png" alt="">
         </div>
         <div class="resultBannerTwo d-flex">
            <img src="../assets/img/league-club-2.png" alt="">
            <h4>United Fs Club</h4>
            <h1>VS</h1>
            <h4>Schalke Club</h4>
            <img src="../assets/img/league-club-3.png" alt="">
         </div>
         <div class="resultBannerOne d-flex">
            <img src="../assets/img/league-club-4.png" alt="">
            <h4>Inter Club</h4>
            <h1>VS</h1>
            <h4>Madrid Club</h4>
            <img src="../assets/img/league-club-5.png" alt="">
         </div>
         <div class="resultBannerTwo d-flex">
            <img src="../assets/img/league-club-6.png" alt="">
            <h4>Schalke Club</h4>
            <h1>VS</h1>
            <h4>Arsenal Club</h4>
            <img src="../assets/img/league-club-7.png" alt="">
         </div>
         <div class="resultBannerOne d-flex">
            <img src="../assets/img/league-club-8.png" alt="">
            <h4>Bayern Club</h4>
            <h1>VS</h1>
            <h4>Atletico Club</h4>
            <img src="../assets/img/league-club-9.png" alt="">
         </div>

         <div class="BlackViewAll">
            <h4>View Full Fixtures</h4>
         </div>
      </div>


   </div>

   <!-- ADV section -->

   <div class="adv-imgBet">
      <img src="../assets/img/reklam.jpg" alt="">
   </div>

   <div class="blackAdvBanner d-flex">
      <div class="blackCube bounce-in-top">
         <img src="../assets/img/client2.png" alt="">
      </div>
      <div class="blackCube bounce-in-top">
         <img src="../assets/img/client3.png" alt="">
      </div>
      <div class="blackCube bounce-in-top">
         <img src="../assets/img/client4.png" alt="">
      </div>
      <div class="blackCube bounce-in-top">
         <img src="../assets/img/client7.png" alt="">
      </div>
      <div class="blackCube bounce-in-top">
         <img src="../assets/img/client9.png" alt="">
      </div>
      <div class="blackCube bounce-in-top">
         <img src="../assets/img/client10.png" alt="">
      </div>
   </div>

   <!-- Slider article card not dynamics -->

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
      <div class="cardContainer ">
         <AppArticleCard v-for="(cardArt) in store.cardsArticle" :cardArt="cardArt" class="shake-horizontal" />
      </div>
   </div>


</template>


<style lang="scss">

   .underBanner{
      height: 3vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.405);
      padding-left: 25rem;
      color: white;

      .calendar{
         margin-left: 2rem;

         i{
            font-size: 1.2rem;
            margin-right: 1rem;
         }
      }

      .plus{
         margin-left: 2rem;

         i{
            font-size: 1.2rem;
            margin-right: 1rem;
         }
      }
   }


   .containerMatch{
      height: 140vh;
      background-image: url(../assets/img/saha.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      


      .matchBanner{
         display: flex;
         padding-left: 15rem;
         height: 15vh;
         background-color: rgba(0, 0, 0, 0.3);
         margin-top: 2rem;


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
         background-color: #9b51e0;
         border: 1px solid white;
         border-radius: 2rem;


         h4{
            font-weight: 700;
         }

      }




   }

   .containerTable{
      height: 100vh;
      background-color: #ffffff;
      display: flex; 
      padding-left: 7rem;


      .titleOne{
         padding: 1rem;
         color: rgb(0, 0, 0);

         h1{
            font-size: 2rem;
            font-weight: 700;
         }
      }

      .leagueTable{
         height: 85vh;
         width: 45%;
         margin: 2rem;
         border: .5px soldi gray;

         .ViewButton{
            height: 7vh;
            background-color: #9b51e0;

            h4{
               font-size: 1.2rem;
               padding: 1rem;
               text-align: center;
               font-weight: 700;
               color: white;
            }
         }


         .bannerMatch{
            height: 8vh;
            width: 100%;
            background-color: #f5f5f5;


            .leftBanner{
               width: 50%;

               h4{
                  font-size: 1.3rem;
                  font-weight: 200;
                  padding: 1.2rem;
               }
            }

            .rightBanner{
               width: 50%;

               h4{
                  margin-top: .3rem;
                  font-size: 1.3rem;
                  font-weight: 200;
                  padding: .9rem;
                  margin-left: 3rem;
               }
            }
         }
      }

      
      .resultTable{
         height: 85vh;
         width: 40%;
         margin: 2rem;

         .BlackViewAll{
            height: 7vh;
            background-color: #9b51e0;

            h4{
               font-size: 1.3rem;
               padding: 1rem;
               text-align: center;
               font-weight: 700;
               color: white;
            }
         }

         .resultBannerOne{
            height: 9vh;
            background-color: #f3f3f3;
            padding-left: 8.3rem;

            h1{
               margin-top: 1.5rem;
               font-size: 1.5rem;
               font-weight: 600;
            }

            h4{
               padding: 1.5rem;
               font-weight: 200;
            }

            img{
               height: 3.5rem;
               margin: .5rem;
            }
         }

         
         .resultBannerTwo{
            height: 8.3vh;
            background-color: #ebebeb;
            padding-left: 8rem;

            h1{
               margin-top: 1.5rem;
               font-size: 1.5rem;
               font-weight: 600;
            }

            h4{
               padding: 1.5rem;
               font-weight: 200;
            }

            img{
               height: 3.7rem;
               margin: .5rem;
            }
         }

         .titleTwo{
            padding: 1rem;
            
            h1{
               font-size: 2rem;
               font-weight: 700;
            }
         }


      }


      .topTable{
         width: 100%;
         height: 5vh;
         background-color: #212121;
         color: white;

         .LeftTable{
            width: 50%;

            h1{
               font-size: 1.5rem;
               color: white;
               margin-left: .5rem;
               margin-top: .5rem;
            }
         }

         .RightTable{
            width: 50%;

            h1{
               font-size: 1.5rem;
               color: white;
               margin-left: 4.3rem;
               margin-top: .5rem;
            }
         }

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
      background-color: #9b51e0;
      padding-top: 1.5rem;

      .blackCube{
         padding: .5rem;
         margin: 2rem;
         width: 240px;
         height: 170px;
         border: 1px solid white;
         border-radius: 2rem;
      }

   }

   .containerSliderCard{

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
         background-color: #fbfbfb;
      }
   }


   // ALL Effect

   .slide-in-elliptic-top-fwd{
	animation: slide-in-elliptic-top-fwd 4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
   }

   .text-focus-in {
	animation: text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
   }  

   .bounce-in-top{
	animation: bounce-in-top 2s both;
   }

   .shake-horizontal:hover{
	animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
   cursor: pointer;
   }


   // All keyframes 

   @keyframes shake-horizontal {
   0%,
   100% {
      transform: translateX(0);
   }
   10%,
   30%,
   50%,
   70% {
      transform: translateX(-10px);
   }
   20%,
   40%,
   60% {
      transform: translateX(10px);
   }
   80% {
      transform: translateX(8px);
   }
   90% {
      transform: translateX(-8px);
   }
   }


   @keyframes bounce-in-top {
   0% {
      transform: translateY(-500px);
      animation-timing-function: ease-in;
      opacity: 0;
   }
   38% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
   }
   55% {
      transform: translateY(-65px);
      animation-timing-function: ease-in;
   }
   72% {
      transform: translateY(0);
      animation-timing-function: ease-out;
   }
   81% {
      transform: translateY(-28px);
      animation-timing-function: ease-in;
   }
   90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
   }
   95% {
      transform: translateY(-8px);
      animation-timing-function: ease-in;
   }
   100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
   }
   }


   @keyframes text-focus-in {
   0% {
      filter: blur(12px);
      opacity: 0;
   }
   100% {
      filter: blur(0px);
      opacity: 1;
   }
   }


   @keyframes slide-in-elliptic-top-fwd {
   0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
   }
   100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
   }
   }


</style>
