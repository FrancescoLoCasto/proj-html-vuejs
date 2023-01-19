
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
});