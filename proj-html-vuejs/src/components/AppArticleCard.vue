
<script>
export default {
   name: 'AppArticleCard',

   props: {
      cardArt: {

      }
   },



   data() {
      return {

      }
   },

   methods: {
      
   },


}
</script>

<template lang="">
   <div class="ContainerArticle">
      <div class="cardArt">
         <div class="imgArt">
            <img :src="cardArt.imgUrl" alt="">
          </div>
          <h5 class="date">{{ cardArt.dateArt }}</h5>
          <h2 class="firstText">{{ cardArt.title }}</h2>
          <h4 class="SecondText">{{ cardArt.text }}</h4>
          <div class="blackMore">{{ cardArt.more }}</div>
      </div>
   </div>
</template>



<style lang="scss" scoped>
   .ContainerArticle{
      display: flex;
      flex-wrap: wrap;

      .cardArt{
         width: 380px;
         height: 500px;
         background-color: #ffffff;
         text-align: center;
         margin-top: 3rem;
         border-radius: 1rem;
         box-shadow: rgba(0, 0, 0, 0.401) 0px 5px 15px;

         .imgArt{
            margin-top: 3rem;
         }

         .firstText{
            font-weight: 600;
         }

         .SecondText{
            font-size: 1rem;
            font-weight: 200;
         }


         .blackMore{
            color: white;
            margin: 0 auto;
            margin-top: 2rem;
            padding: 1.3rem;
            width: 8rem;
            background-color: #9b51e0;
            font-weight: 700;
            border-radius: 1.5rem;
         }

      }
   }
</style>