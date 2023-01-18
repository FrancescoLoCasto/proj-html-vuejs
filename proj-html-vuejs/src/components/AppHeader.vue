
<script>
export default {
   
}
</script>

<template lang="">   
   <div class="container-img">
      <div class="navBar">
         <div class="img-advBox">
            <img src="../assets/img/logo-football.png" alt="">
            <div class="advHeader">
               <img src="../assets/img/sponsor1.png" alt="">
               <img src="../assets/img/sponsor2.png" alt="">
            </div>
         </div>
         <div class="nav-list">
            <ul>
               <li>
                  Home
               </li>
               <li>
                  Fixtures & Result
               </li>
               <li>
                  League Table
               </li>
               <li>
                  Players
               </li>
               <li>
                  Gallery
               </li>
               <li>
                  Blog
               </li>
               <li>
                  Contact
               </li>
            </ul>
         </div>
      </div>

      <div class="textBox">
         <div class="text">
               <h1>
                  Football Club 
               </h1>
               <h1>
                  Sport Club
               </h1>
               
               <br>

               <h4>
                  Private football matches
               </h4>

               <div class="learnMore">

                  <h4 class="btn">
                     Learn More
                  </h4>
               </div>
            </div>
         </div>
         
      </div>

   <div class="gameSquad">

   </div>
</template>


<style lang="scss" scoped>
   .container-img{
      height: 110vh;
      width: 100%;
      background-image: url(../assets/img/slider2-1.jpg);
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
            }
         }





         .nav-list{
            height: 30%;
            
            ul{
               display: flex;
               color: white;
               list-style-type: none;
               text-transform: uppercase;
               

               li{
                  margin-left: 8rem;
                  margin-top: 1.5rem;
                  font-size: 1.5rem;
               }
            }
         }
      }


      .textBox{
         height: 70vh;
         text-align: center;
         margin-top: 10rem;

         h1{
            color: white;
            font-size: 5rem;
         }

         h4{
            color: white;
            font-weight: 700;
         }

         .learnMore{ 
            margin: 5rem;

            h4{
               height: 5rem;
               width: 25rem;
               padding: 2rem;
               border: 2px solid white;
               border-radius: 45%;
            }
         }
      }
   }

   .gameSquad{
      height: 30vh;
      background-color: cornflowerblue;
   }

</style>
