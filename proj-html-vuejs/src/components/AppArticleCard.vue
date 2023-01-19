
<script>
export default {
   name: 'AppArticleCard',

   props: {
      cardArticles: {

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
         width: 350px;
         height: 400px;
         background-color: black;
      }
   }
</style>