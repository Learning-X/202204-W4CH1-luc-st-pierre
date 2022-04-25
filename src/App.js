import "./App.css";
import Button from "./components/Button/Button";
import Gentlemen from "./components/Gentlemen/Gentlemen";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="App">
      <header class="main-header">
        <h1 class="main-title">The pointing gentlemen</h1>
      </header>
      <section class="controls">
        <Info />
        <Button className="button button--select" text="Select all" />
      </section>
      <main class="main">
        <ul class="gentlemen">
          <Gentlemen />
        </ul>
      </main>
    </div>
  );
}

export default App;
