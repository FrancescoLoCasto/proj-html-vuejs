
<script>
export default {
   
}
</script>

<template lang="">
<div class="containerFooter">
   <div class="socialContact">
      <img src="../assets/img/logo-footer-football.png" alt="">

      <div class="pointer">
         <i class="fa-solid fa-location-dot"></i>
         <h3>New Jersey, USA</h3>
      </div>

      <div class="phone">
         <i class="fa-solid fa-phone-volume"></i>
         <h3>+1(234)567 89 10</h3>
      </div>

      <div class="mail">
         <i class="fa-regular fa-envelope"></i>
         <h3>example@example.com</h3>
      </div>

      <div class="socialNet d-flex">
         <div class="face">
            <i class="fa-brands fa-facebook-f"></i>
         </div>

         <div class="ig">
            <i class="fa-brands fa-instagram"></i>
         </div>

         <div class="tw">
            <i class="fa-brands fa-twitter"></i>
         </div>
      </div>

   </div>

   <div class="socialContactJoin">
      <h1>
         Join Our Newsletter
      </h1>

      <h5>
         Subscribe to be informated about important developments in our club and football world.
      </h5>

      <input type="text" placeholder="Your Email Address">

      <div class="subscribeButton">
         <h3>
            Subscribe <i class="fa-solid fa-arrow-right"></i>
         </h3>
      </div>
   </div>

   <div class="socialContactList">
      <div class="footerList">
         <h1>
            Education
         </h1>
         <div class="list">
            <ul>
               <li>
                  fixtures & result
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
            </ul>
         </div>
      </div>
      <div class="footerList">
         <h1>
            Quick Links
         </h1>
         <div class="list">
            <ul>
               <li>
                  Home
               </li>
               <li>
                  Blog
               </li>
               <li>
                  Gallery
               </li>
               <li>
                  Contact
               </li>
            </ul>
         </div>
      </div>
   </div>
</div>
   <div class="copy">
      <i class="fa-regular fa-copyright"></i>
      <h1>
         2022 Football Club - All Rights Reserved
      </h1>
   </div>
</template>


<style lang="scss">
   .containerFooter{
      height: 50vh;
      background-image: url(../assets/img/footer-bg-football.jpg);
      display: flex;

      .socialContact{
         width: 34%;
         height: 100%;

         img{
            height: 10rem;
            padding: 2rem;
         }

         .pointer{
            display: flex;
            margin-left: 2rem;
            padding: 1rem;


            i{
               font-size: 1.7rem;
               color: white;
            }

            h3{
               margin-left: 1.5rem;
               font-size: 1.5rem;
               color: white;
            }
         }

         .phone{
            display: flex;
            margin-left: 2rem;
            padding: 1rem;

            i{
               font-size: 1.7rem;
               color: white;
            }


            h3{
               margin-left: 1.5rem;
               font-size: 1.5rem;
               color: white;

            }
         }

         .mail{
            display: flex;
            margin-left: 2rem;
            padding: 1rem;

            i{
               font-size: 1.7rem;
               color: white;
            }


            h3{
               margin-left: 1.5rem;
               font-size: 1.5rem;
               color: white;

            }
         }

         .socialNet{
            margin-left: 2rem;

            .face{
               margin: 1rem;
               text-align: center;
               width: 6rem;
               padding: .2rem;
               border: 1px solid white;
               color: white;
               font-size: 2rem;
            }

            .ig{
               margin: 1rem;
               text-align: center;
               width: 6rem;
               padding: .2rem;
               border: 1px solid white;
               color: white;
               font-size: 2rem;
            }

            .tw{
               margin: 1rem;
               text-align: center;
               width: 6rem;
               padding: .2rem;
               border: 1px solid white;
               color: white;
               font-size: 2rem;
            }
         }
      }

      .socialContactJoin{
         width: 34%;
         height: 100%;
         padding: 2rem;

         h1{
            font-weight: 700;
            color: white;
            padding: 1rem;
         }

         h5{
            font-size: 1rem;
            font-weight: 200;
            color: white;
            padding: .7rem;
         }

         input{
            height: 4.5rem;
            width: 23rem;
            border-radius: 2rem;
            border: 0;
            padding-left: 2rem;
         }

         .subscribeButton{
            margin-top: .3rem;
            padding-top: 1.5rem;
            text-align: center;
            width: 23rem;
            height: 4.5rem;
            background-color: white;
            border-radius: 2rem;

            h3{
               font-weight: 200;
               font-size: 1rem;
            }

         }
      }

      .socialContactList{
         display: flex;
         width: 34%;
         height: 100%;

         .footerList{
            width: 50%;
            height: 100%;

            h1{
               padding-bottom: 1rem;
               margin-top: 4rem;
               font-weight: 700;
               color: white;
            }

            .list{
               font-size: 1.2rem;
               color: white;
               text-transform: uppercase;
               ul{
                  list-style-type: none;

                  li:before{
                     font-size: 1.5rem;
                     font-weight: 700;
                     content: '-';
                  }
               }
            }
         }
      }


   }

   .copy{
         display: flex;
         width: 100%;
         height: 10vh;
         background-image: url(../assets/img/footer-bg-football.jpg);
         padding-left: 47rem;

         i{
            color: white;
            font-size: 1.2rem;
         }
         
         h1{
            font-size: 1.2rem;
            color: white;
            margin-left: .7rem;
         }
      }


</style>
