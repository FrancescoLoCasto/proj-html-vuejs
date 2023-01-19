
<script>
export default {
   
}
</script>

<template lang="">
<div class="containerFooter">
   <div class="socialContact">
      
   </div>

   <div class="socialContact">

   </div>

   <div class="socialContactList">
      <div class="footerList">

      </div>
      <div class="footerList">
         
      </div>
   </div>

</div>
</template>


<style lang="scss">
   .containerFooter{
      height: 40vh;
      background-color: black;
      display: flex;

      .socialContact{
         width: 34%;
         height: 100%;
         background-color: chocolate;
         border: 1px solid red;
      }

      .socialContactList{
         display: flex;
         width: 34%;
         height: 100%;
         background-color: chocolate;
         border: 1px solid red;

         .footerList{
            width: 50%;
            height: 100%;
            background-color: hotpink;
            border: 1px dotted blue;
         }
      }
   }


</style>
