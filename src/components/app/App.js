import logo from '../../logo.svg';
import './App.css';
import MainField from "../main-field/main-field";
import PlayerField from "../player-field/player-field";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  /!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
      {/*</header>*/}
      <main>
        <PlayerField position={"top"}/>
        <MainField />
        <PlayerField/>
      </main>
    </div>
  );
}

export default App;
