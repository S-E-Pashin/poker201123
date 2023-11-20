// import {Component} from "react";
// import Card from "../card/card";
// import './playing-cards.css'
import shuffle from "./arr-random";
// import givePlayersCards from "../../support/player-cards";

const cardsSave = {

  0
    :
    {nominal: '2', suit: 'club', idCard: '1'},
  1
    :
    {nominal: '3', suit: 'club', idCard: '2'},
  2
    :
    {nominal: '4', suit: 'club', idCard: '3'},
  3
    :
    {nominal: '5', suit: 'club', idCard: '4'},
  4
    :
    {nominal: '6', suit: 'club', idCard: '5'},
  5
    :
    {nominal: '7', suit: 'club', idCard: '6'},
  6
    :
    {nominal: '8', suit: 'club', idCard: '7'},
  7
    :
    {nominal: '9', suit: 'club', idCard: '8'},
  8
    :
    {nominal: '10', suit: 'club', idCard: '9'},
  9
    :
    {nominal: 'jack', suit: 'club', idCard: '10'},
  10
    :
    {nominal: 'queen', suit: 'club', idCard: '11'},
  11
    :
    {nominal: 'king', suit: 'club', idCard: '12'},
  12
    :
    {nominal: 'ace', suit: 'club', idCard: '13'},
  13
    :
    {nominal: '2', suit: 'hearts', idCard: '14'},
  14
    :
    {nominal: '3', suit: 'hearts', idCard: '15'},
  15
    :
    {nominal: '4', suit: 'hearts', idCard: '16'},
  16
    :
    {nominal: '5', suit: 'hearts', idCard: '17'},
  17
    :
    {nominal: '6', suit: 'hearts', idCard: '18'},
  18
    :
    {nominal: '7', suit: 'hearts', idCard: '19'},
  19
    :
    {nominal: '8', suit: 'hearts', idCard: '20'},
  20
    :
    {nominal: '9', suit: 'hearts', idCard: '21'},
  21
    :
    {nominal: '10', suit: 'hearts', idCard: '22'},
  22
    :
    {nominal: 'jack', suit: 'hearts', idCard: '23'},
  23
    :
    {nominal: 'queen', suit: 'hearts', idCard: '24'},
  24
    :
    {nominal: 'king', suit: 'hearts', idCard: '25'},
  25
    :
    {nominal: 'ace', suit: 'hearts', idCard: '26'},
  26
    :
    {nominal: '2', suit: 'diamonds', idCard: '27'},
  27
    :
    {nominal: '3', suit: 'diamonds', idCard: '28'},
  28
    :
    {nominal: '4', suit: 'diamonds', idCard: '29'},
  29
    :
    {nominal: '5', suit: 'diamonds', idCard: '30'},
  30
    :
    {nominal: '6', suit: 'diamonds', idCard: '31'},
  31
    :
    {nominal: '7', suit: 'diamonds', idCard: '32'},
  32
    :
    {nominal: '8', suit: 'diamonds', idCard: '33'},
  33
    :
    {nominal: '9', suit: 'diamonds', idCard: '34'},
  34
    :
    {nominal: '10', suit: 'diamonds', idCard: '35'},
  35
    :
    {nominal: 'jack', suit: 'diamonds', idCard: '36'},
  36
    :
    {nominal: 'queen', suit: 'diamonds', idCard: '37'},
  37
    :
    {nominal: 'king', suit: 'diamonds', idCard: '38'},
  38
    :
    {nominal: 'ace', suit: 'diamonds', idCard: '39'},
  39
    :
    {nominal: '2', suit: 'peak', idCard: '40'},
  40
    :
    {nominal: '3', suit: 'peak', idCard: '41'},
  41
    :
    {nominal: '4', suit: 'peak', idCard: '42'},
  42
    :
    {nominal: '5', suit: 'peak', idCard: '43'},
  43
    :
    {nominal: '6', suit: 'peak', idCard: '44'},
  44
    :
    {nominal: '7', suit: 'peak', idCard: '45'},
  45
    :
    {nominal: '8', suit: 'peak', idCard: '46'},
  46
    :
    {nominal: '9', suit: 'peak', idCard: '47'},
  47
    :
    {nominal: '10', suit: 'peak', idCard: '48'},
  48
    :
    {nominal: 'jack', suit: 'peak', idCard: '49'},
  49
    :
    {nominal: 'queen', suit: 'peak', idCard: '50'},
  50
    :
    {nominal: 'king', suit: 'peak', idCard: '51'},
  51
    :
    {nominal: 'ace', suit: 'peak', idCard: '52'},
}
// трефа  &clubs;
// club

// черва &#9829; (или &hearts;) и &#9825;
// hearts

// Бубна HTML — &#9830; (или &diams;) и &#9826;
// Diamonds

// Пика HTML — &#9824; (или &spades;) и &#9828;
// Peak

let suit = [
  "club", "hearts", "diamonds", "peak"
]

let nominal = [
  "2","3","4","5","6","7","8","9","10","J", "Q", "K", "T"
]

let nominalBig = [
  "2","3","4","5","6","7","8","9","10","jack", "queen", "king", "ace", "joker"
]

let deck = [];

 let giveDeck = (suit, nominal) => {
//  я хочу создать колоду
//  выполнить перебор номиналов 4 раза,
//  с присвоением каждому номиналу одной масти ,
  let idCard = 0;

  suit.forEach(function (item, index) {
    nominal.forEach(function (item, i) {
      idCard = idCard + 1;
      let elem = {
        "nominal": item,
        "suit": suit[index],
        "idCard": `${idCard}`,
      }
      deck.push(elem);
    })

    // console.log(arr);
  });
  //Перемешивание массива с картами.
  shuffle(deck);
  return deck;
}

// giveDeck(suit, nominal);
// console.log(playing-cards);
//  let cardsPlayer = [];
//
//  givePlayersCards(deck, cardsPlayer, 2);

let arrDeck = giveDeck(suit, nominal);
// console.log(deck);
// console.log(cardsPlayer);
// export cardsPlayer;

export default arrDeck;


