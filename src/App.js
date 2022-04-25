import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Gentlemen from "./components/Gentlemen/Gentlemen";
import Info from "./components/Info/Info";
import gentleman from "./data/gentlemen";

function App() {
  const [gentlemen, setGentlemen] = useState(gentleman);

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
          {gentlemen.map((gentleman) => {
            return <Gentlemen key={gentleman.id} gentleman={gentleman} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
