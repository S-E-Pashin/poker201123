import './main-field.css';
import MainCardsPlace from "../main-cards-place/main-cards-place.js";
const MainField = () => {
  return (
      <div className="main-field">
        {/*<p>Карты на столе:</p>*/}
        <MainCardsPlace />
      </div>
  )
}

export default MainField;
