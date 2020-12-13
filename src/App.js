import logo from './logo.svg';
import './App.css';

function getButtonText() {
  return 'Click on me!';
}

function App() {

  const buttonText = 'Click Me!';

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label className="label" htmlFor="name">
            Enter name
          </label>
          <input id="name" type="text"></input>
  <button style={{backgroundColor: 'blue', color: 'white'}} >{getButtonText()}</button>
        </div>
      </header>
    </div>
  );
}

export default App;
