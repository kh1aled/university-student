import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
function App() {
  return (
    <HashRouter>
     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
         khaled hamdy id front end developer
        </h1>
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
    </HashRouter>
   
  );
}

export default App;
