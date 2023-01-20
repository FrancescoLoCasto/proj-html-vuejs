

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

<div class="container-img" :style="ImageContainer">
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
          <li>Home</li>
          <li class="BorderHv">Fixtures & Result</li>
          <li>League Table</li>
          <li>Players</li>
          <li>Gallery</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>

    <div class="textBox">
      <div class="arrowButtonLeft" @click="prevImg">
        <i class="fa-solid fa-chevron-left"></i>
      </div>
      <div class="text">
        <h1>Football Club</h1>
        <h1>Sport Club</h1>

        <br>

        <h4>Private football matches</h4>

        <div class="learnMore">
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

   <div class="gameSquad">
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

      <div class="blackButton">
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

</style>
