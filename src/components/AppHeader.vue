

<script>
export default {
   data() {
      return {
         images: [ "src/assets/img/slider1-1.jpg", "src/assets/img/slider2-1.jpg", "src/assets/img/slider3.jpg", "src/assets/img/slider4.jpg"],
         currentImg: 0
      }
   },

   methods: {
         prevImg() {
         this.currentImg--;
         if (this.currentImg < 0) {
         this.currentImg = this.images.length - 1;
         }
      },

         nextImg() {
         this.currentImg++;
         if (this.currentImg >= this.images.length) {
         this.currentImg = 0;
         }
      },

      autoPlay() {
         setInterval(this.nextImg,4000)
      }
   },

   computed: {
      ImageContainer(){
         return {
            'background-image':`url(${this.images[this.currentImg]}) `
         }
      }
   },

   created() {
      this.autoPlay()
   },
}
</script>

<template lang="">   

<!-- HeaderBlackTrasparent -->

<div class="container-img slide-in-bck-center" :style="ImageContainer">
    <div class="navBar">
      <div class="img-advBox">
        <img src="../assets/img/logo-football.png" alt="">
        <div class="advHeader d-flex">
          <img src="../assets/img/sponsor1.png" alt="">
          <img src="../assets/img/sponsor2.png" alt="">
          <div class="socialMedia d-flex mt-4">
             <i class="fa-brands fa-facebook-f"></i>
             <i class="fa-brands fa-instagram"></i>
             <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
      <div class="nav-list">
        <ul>
          <li class="BorderHv">Home</li>
          <li class="BorderHv">Fixtures & Result</li>
          <li class="BorderHv">League Table</li>
          <li class="BorderHv">Players</li>
          <li class="BorderHv">Gallery</li>
          <li class="BorderHv">Blog</li>
          <li class="BorderHv">Contact</li>
        </ul>
      </div>
    </div>

    <!-- Slider IMG Dynamic -->

    <div class="textBox slide-in-bck-center">
      <div class="arrowButtonLeft" @click="prevImg">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="text">
        <h1>Football Club</h1>
        <h1>Sport Club</h1>

        <br>

        <h4>Private football matches</h4>

        <div class="learnMore shake-horizontal">
          <h4 class="btn">
            Learn More <i class="fa-solid fa-arrow-right"></i>
          </h4>
        </div>
      </div>

      <div class="arrowButtonRight" @click="nextImg">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>

  <!-- Match Box  -->

   <div class="gameSquad slide-in-bck-center bounce-in-top">
      <div class="Squad">
         <div class="InstanbulSport">
            <h1>Instanbull Sports</h1>
            <img src="../assets/img/club-1.png" alt="">
         </div>
         <div class="vsBox">
            <h1>
               vs
            </h1>
         </div>
         <div class="unitedFS">
            <img src="../assets/img/club-2.png" alt="">
            <h1>United Fs Club</h1>
         </div>
      </div>

      <div class="dateText">
         <div class="calendar">
            <i class="fa-regular fa-calendar-days"></i>
            <h5>May 21, 2022 18:05 pm</h5>
         </div>
         
         <div class="plus">
            <i class="fa-solid fa-circle-plus"></i>
            <h5>May 21, 2022 18:05 pm</h5>
         </div>
      </div>

      <div class="blackButton shake-horizontal">
         <div class="buttonBox">
            <h3>View Match Details</h3>
         </div>
      </div>
   </div>
</template>


<style lang="scss" scoped>
   .container-img{
      height: 110vh;
      width: 100%;
      background-repeat: no-repeat;
      background-size: cover;
   
      .navBar{
         height: 30vh;
         width: 100%;
         background-color: rgba(0, 0, 0, 0.468);


         .img-advBox{
            display: flex;
            height: 70%;
            position: relative;
            margin-left:  55rem;




            .advHeader{
               position: absolute;
               top: 30%;
               left: -17%;

               .socialMedia{
                  margin-left: 8rem;
                  padding-left: 1rem;

                  i{
                     font-size: 2rem;
                     color: white;
                     margin: .5rem;
                  }
               }
            }
         }





         .nav-list{
            height: 30%;
            
            ul{
               display: flex;
               color: white;
               list-style-type: none;
               text-transform: uppercase;
               font-weight: 700;
               

               li{
                  margin-left: 8rem;
                  margin-top: 1.5rem;
                  font-size: 1.5rem;
               }

               .BorderHv{
                  &:hover{
                     border-bottom: 2px solid white;
                  }
               }




            }
         }
      }


      .textBox{
         height: 70vh;
         text-align: center;
         display: flex;

         .text{
            margin-top: 6rem;


         }

         .arrowButtonRight{
            width: 43rem;

            i{
               padding: 1rem;
               margin-top: 18rem;
               margin-left: 30rem;

               border: 1px solid white;
               border-radius: 100%;
               color: white;
            }
         }

         .arrowButtonLeft{
            width: 43rem;

            i{
               margin-right: 30rem;
               margin-top: 18rem;
               padding: 1rem;
               border: 1px solid white;
               border-radius: 100%;
               color: white;
            }
         }

         h1{
            color: white;
            font-size: 5rem;
            font-weight: 700;

         }

         h4{
            color: white;
            font-weight: 700;
         }

         .learnMore{ 
            margin-top: 4rem;

            h4{
               padding: 1.5rem;
               height: 5rem;
               width: 20rem;
               border: 2px solid white;
               border-radius: 2rem;
            }
         }
      }
   }

   .gameSquad{
      height: 40vh;
      background-color: #ffffff;

      .Squad{
         height: 20vh;
         display: flex;
         margin-left: 25rem;
         
         
         .InstanbulSport{
            display: flex;
            width: 33%;
            
            h1{
               margin-top: 4rem;
            }
         }


         .vsBox{
            width: 10%;
            text-align: center;

            h1{
               font-size: 7rem;
            }

         }

         .unitedFS{
            display: flex;
            width: 33%;

            h1{
               margin-top: 4rem;
            }
         }
      }

      .dateText{
         display: flex;
         height: 5vh;
         margin-left: 45rem;

         .calendar {
         display: flex;
         margin: 1rem;
         }

         .plus{
         display: flex;
            margin: 1rem;
         }
      }

      .blackButton{
         height: 10vh;

         .buttonBox{
            padding: 1rem;
            text-align: center;
            width: 15%;
            color: white;
            background-color: #9b51e0;
            border-radius: 2rem;
            margin-left: 50rem;
            margin-top: 2rem;

            h3{
               font-size: 1.3rem;
               font-weight: 600;
            }
         }
      }
   }

   .slide-in-bck-center {
	animation: slide-in-bck-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
   }

   .bounce-in-top{
	animation: bounce-in-top 1.1s both;
   }

   .shake-horizontal:hover{
	animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
   }


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



   @keyframes slide-in-bck-center {
   0% {
      transform: translateZ(600px);
      opacity: 0;
   }
   100% {
      transform: translateZ(0);
      opacity: 1;
   }
   }


</style>
