import {Component} from "react";
import Card from "../card/card";
import './playing-cards.css'
import shuffle from "../../support/arr-random";
import givePlayersCards from "../../support/player-cards";

class PlayingCards extends Component {
  constructor(props) {
    super(props);


  }




  // giveCP = cardsPlayer;
  // playing-cards = playing-cards;

  render() {
    return (
      <div className="playing-cards">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    )
  }


};



// export default suit;
export default PlayingCards;


