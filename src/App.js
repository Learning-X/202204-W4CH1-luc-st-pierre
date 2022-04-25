import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Gentlemen from "./components/Gentlemen/Gentlemen";
import Info from "./components/Info/Info";
import gentleman from "./data/gentlemen";

function App() {
  const [gentlemen, setGentlemen] = useState(gentleman);

  const gentlemanSelected = gentlemen.filter(
    (gentleman) => gentleman.selected === true
  ).length;

  const selectAllGentleman = () => {
    setGentlemen(
      gentleman.map((gentleman) => ({
        ...gentleman,
        selected: true,
      }))
    );
  };

  return (
    <div className="App">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <section className="controls">
        <Info gentlemanSelected={gentlemanSelected} />
        <Button
          className="button button--select"
          action={selectAllGentleman}
          text="Select all"
        />
      </section>
      <main className="main">
        <ul className="gentlemen">
          {gentlemen.map((gentleman) => {
            return <Gentlemen key={gentleman.id} gentleman={gentleman} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
