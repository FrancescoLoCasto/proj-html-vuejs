
<script>
export default {
   
}
</script>

<template lang="">   
   <div class="container-img">
      <div class="navBar">
         <div class="img-advBox">

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
      background-color: rgb(110, 233, 9);
   
      .navBar{
         height: 30vh;
         width: 100%;
         background-color: rgba(0, 0, 0, 0.468);
      

         .img-advBox{
            height: 50%;
            background-color: blue;
         }

         .nav-list{
            height: 50%;
            background-color: blueviolet;
         }
      }


      .textBox{
         height: 60vh;
         background-color: chocolate;
      }
   }

   .gameSquad{
      height: 30vh;
      background-color: cornflowerblue;
   }

</style>
