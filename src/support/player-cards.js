/*Функция берет массив, производит перемешивание
*вырезает после перемешивания 2а элемента из массива
*  и помещает их в получаемый аргументом массив
* */

import shuffle from "./arr-random";

// let givePlayerCards = (arr1) => {
//   let playerCards = [];
//   shuffle(arr1);
//   playerCards.push(arr1.pop());
//   shuffle(arr1);
//   playerCards.push(arr1.pop());
//
//   return playerCards;
// }

//получаю карты на определенное количество игроков.
let givePlayersCards = (arr1, arr2, numPlayers) => {
  shuffle(arr1);
  let howManyCards = numPlayers * 2;

  let i = 1;
  while (i <= howManyCards) {
    arr2.push(arr1.pop());
    i++;
  }



  let elemPlayer = {
    // cards: ,
  }
}




export default givePlayersCards;
// export default givePlayerCards;
// // export givePlayerCards;
