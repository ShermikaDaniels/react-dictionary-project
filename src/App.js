import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Shermika Daniels with React.js and open-sourced on GitHub
            and hosted on Netlify
          </small>
        </footer>
      </div>
    </div>
  );
}
