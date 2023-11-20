import './card.css';
// import suit from "../playing-cards/playing-cards";
import {Component} from "react";
import shuffle from "../../support/arr-random";
import arrDeck from "../../support/deck";
import logo from "../../logo.svg";

let deck = arrDeck;

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
    //масть
      suit: '',
    //номинал
      nominal: '',
    //обложка
      cover: '',
    //открыта или скрыта
      given: false,
      switchOpenCard: "card",
      // switchOpenCard: false,
    }
  }

  // giveNewCard = (deck) => {
  //
  // }

  givePlayerCard = (arr) => {
    let playerCard = [];
    // let playerCard;
    shuffle(arr);
    playerCard.push(arr.pop());
    console.log(playerCard);
    return playerCard;
  }

  giveCard = () => {
    let cardArr = this.givePlayerCard(deck);
    let card = cardArr[0];
    console.log(deck);
    console.log(card.nominal);
    console.log(card.suit);

    this.setState((state) => ({
      given: true,
      //масть
      suit: card.suit,
      //номинал
      nominal: card.nominal,
        // {nominal, suit}: {...card} ,
      })
    )
  }

  bodyCardClose = () => {
    return (
      <div className="card card-close" onClick={this.giveCard}>
        <img src={logo} className="card-bg" />
      </div>
    )
  }

  bodyCardTable = (classForNominal, nominal, suit) => {
    return (
      <div className="card">
        <div className="nominal nominal-top">
          <div className={classForNominal}>
            {nominal}
          </div>

        </div>
        <div className="suit-image">
          <div className={suit}>
            {/*{suit}*/}
          </div>
        </div>
        <div className="nominal nominal-bottom">
          <div className={classForNominal}>
            {nominal}
          </div>

        </div>
      </div>
    )
  }

  bodyCardPlayer = (classForNominal, nominal, suit) => {

    let card = "card";
    // if(this.props.switchOpenCard != '') {
    //   card = this.props.switchOpenCard;
    // }
    let cardOpen = this.props.switchOpenCard;
    // console.log(this.state.switchOpenCard);

    if(cardOpen === true) {
      card = "card";

      return (
        <div className={card}>
          <div className="nominal nominal-top">
            <div className={classForNominal}>
              {nominal}
            </div>

          </div>
          <div className="suit-image">
            <div className={suit}>
              {/*{suit}*/}
            </div>
          </div>

          <div className="nominal nominal-bottom">
            <div className={classForNominal}>
              {nominal}
            </div>

          </div>
        </div>
      )



    } else if(cardOpen === false) {
      card = "card-close"
      return (
        <div className="card card-close" >
          <img src={logo} className="card-bg" />
        </div>
      )
    }

    // return (
    //   <div className={card}>
    //     <div className="nominal nominal-top">
    //       <div className={classForNominal}>
    //         {nominal}
    //       </div>
    //
    //     </div>
    //     <div className="suit-image">
    //       <div className={suit}>
    //         {/*{suit}*/}
    //       </div>
    //     </div>
    //
    //     <div className="nominal nominal-bottom">
    //       <div className={classForNominal}>
    //         {nominal}
    //       </div>
    //
    //     </div>
    //   </div>
    // )
  }







  render() {
    const {given} = this.state;
    const {playerCard} = this.props;
    const {nominal, suit} = this.state;
    const classForNominal = `${nominal } ${suit} `;


    if (given) {
      if (playerCard === true) {
        console.log('YES');
        //Если карта для игрока выдай карту для игрока.
        // todo и вот на этом моменте будет селектор переключатель карт игрока
        // todo который скрывает или открывает карты игрока
        return (
          this.bodyCardPlayer(classForNominal, nominal, suit)
        )
      } else {
        //Если карта для стола, выдай карту для стола

        return (
          this.bodyCardTable(classForNominal, nominal, suit)
        )
      }
    } else {
      //Если карта не выдана вообще возвращает тело для закрытой карты.
      return (
        this.bodyCardClose()
      )
    }





  }

}


export default Card;
