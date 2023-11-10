import logo from './logo.svg';
import './App.css';
import CartaPresentacion from "./components/CartaPresentacion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CartaPresentacion />

        <a
          className="App-link"
          href="https://github.com/velaquia/mi_proyecto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repositorio
        </a>
      </header>
    </div>
  );
}

export default App;