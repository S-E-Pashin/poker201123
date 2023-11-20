import {Component} from "react";
import './player-field.css'
import Card from "../card/card";

//*у каждой карты слушатель
// нет, нужно при генерации карт сразу 1м
// делом из колоды вытаскивать карты на игроков
// и открывать карты только при нажатии
// на них меняя видимость карты на открыто
// а по умолчанию она должна быть скрыта
//
// */

class PlayerField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openCards: true
    }
  }

  // openCardsPlayer = () => {
  //   this.setState((state) => ({
  //     openCards: true
  //     })
  //   )
  // }
  //
  // closeCardsPlayer = () => {
  //   this.setState((state) => ({
  //       openCards: false
  //     })
  //   )
  // }
  // Переключатор от обратного, работает по кругу.
  cardOpennessSwitch = () => {
    console.log("Изменилось отображение карты!");
    // console.log(this.state.openCards);

    this.setState((state) => ({
        openCards: !(state.openCards)
      })
    )
    // console.log(this.state.openCards);
  }




  render() {
    let cardOpen = this.state.openCards;
    console.log(cardOpen);
    let classNamePlayerField = "player-field";

    const {position} = this.props;

    if(position === "top") {
      classNamePlayerField = "player-field player-field-180deg";
    }

    // let card;
    // if(cardOpen === true) {
    //   card = "card";
    // } else if(cardOpen === false) {
    //   card = "card-close"
    // }

    return (
      <div className={classNamePlayerField}>
        <div className="player-field-cards">
          <Card playerCard={true} switchOpenCard={cardOpen}/>
          <Card playerCard={true} switchOpenCard={cardOpen}/>
        </div>
        <div className="player-field-control-panel">
          <button className="player-field-button"
                  onClick={this.cardOpennessSwitch}
          >
            скрыть/показать карты
          </button>
        </div>
        {/*<Card {Deck.giveCP.{...giveCP[0]}}/>*/}
        {/*<Card {...cardsPlayer[1]}/>*/}
      </div>
    )
  }

}

export default PlayerField;
