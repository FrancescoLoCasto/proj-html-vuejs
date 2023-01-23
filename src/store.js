
import { reactive } from 'vue'

export const store = reactive({
   cardsPlayers: [
      {
         imgUrl: "/src/assets/img/player1.jpg",
         title: '07',
         text: 'Adam Brown- Forwarder'
      },
      {
         imgUrl: "/src/assets/img/player2.jpg",
         title: '09',
         text: 'Michael Kayn- Forwarder'
      },
      {
         imgUrl: "/src/assets/img/player3.jpg",
         title: '11',
         text: 'Michael Lee - Forwarder'
      },
      {
         imgUrl: "/src/assets/img/player4.jpg",
         title: '15',
         text: 'Ethan Smith - Midfielder'
      },
  ],

  cardsArticle: [
   {
      imgUrl: "/src/assets/img/news1-1-223x223.png",
      dateArt: '29.05.2022 - Football',
      title: 'Whats is Football?',
      text: 'Football is a sport that is know as a ball game and is loved by [...]',
      more: 'More'
   },
   {
      imgUrl: "/src/assets/img/news2-1-223x223.png",
      dateArt: '29.05.2022 - Football',
      title: 'Football Rules ',
      text: 'GOLDEN GOAL: in a football match, the goal scored by one of the teams in [...]',
      more: 'More'
   },
   {
      imgUrl: "/src/assets/img/news3-1-223x223.png",
      dateArt: '29.05.2022 - Football',
      title: 'Football Features',
      text: 'Football; it is an aerobic-based anaerobic sport in which jumps,kiks,turns,running with changing [...]',
      more: 'More'
   },
   {
      imgUrl: "/src/assets/img/news4-1-223x223.png",
      dateArt: '29.05.2022 - Football',
      title: 'Football Terms',
      text: 'GOLDEN GOAL: in a football match, the goal scored by one of the teams in [...]',
      more: 'More'
   },
  ],
});