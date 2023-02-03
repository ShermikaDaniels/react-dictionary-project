import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://www.linkedin.com/in/shermika-daniels-70093b139">
              Shermika Daniels
            </a>{" "}
            with React.js and{" "}
            <a href="https://github.com/ShermikaDaniels/react-dictionary-project">
              open-sourced on GitHub{" "}
            </a>{" "}
            and hosted on{" "}
            <a href="https://zingy-sprinkles-c8286e.netlify.app/">Netlify</a>
          </small>
        </footer>
      </div>
    </div>
  );
}
