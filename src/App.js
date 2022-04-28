import logo from './logo.svg';
import './App.css';

import ButtonImportant from './components/button-important';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonImportant text={"Hola a todos"}></ButtonImportant>
        <p>
          Edit <code>src/App.js</code> and save to reload porfi.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
