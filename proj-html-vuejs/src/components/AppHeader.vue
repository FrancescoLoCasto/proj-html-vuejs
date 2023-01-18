
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

         </div>
      </div>

      <div class="textBox">

      </div>
   </div>

   <div class="gameSquad">

   </div>
</template>


<style lang="scss" scoped>
   .container-img{
      height: 90vh;
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
            height: 75%;
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
         }
      }


      .textBox{
         height: 60vh;
      }
   }

   .gameSquad{
      height: 30vh;
      background-color: cornflowerblue;
   }

</style>
