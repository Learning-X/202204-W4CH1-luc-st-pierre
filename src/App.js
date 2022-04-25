import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Gentlemen from "./components/Gentlemen/Gentlemen";
import Info from "./components/Info/Info";
import gentlemenData from "./data/gentlemen";

function App() {
  const [gentlemen, setGentlemen] = useState(gentlemenData);

  const gentlemanSelected = gentlemen.filter(
    (gentleman) => gentleman.selected === true
  ).length;

  const selectAllGentleman = () => {
    setGentlemen(
      gentlemen.map((gentleman) => ({
        ...gentleman,
        selected: true,
      }))
    );
  };

  const toggleGentleman = (gentlemanId) => {
    const gentlemanObject = [...gentlemen];

    const gentlemanToToggle = gentlemanObject.find((gentleman) => {
      return gentleman.id === gentlemanId;
    });

    gentlemanToToggle.selected = !gentlemanToToggle.selected;
    setGentlemen(gentlemanObject);
  };

  const removeGentleman = (gentlemanId) => {
    setTimeout(() => {
      const filteredGentlemen = gentlemen.filter(
        (gentleman) => gentleman.id !== gentlemanId
      );
      setGentlemen(filteredGentlemen);
    }, 5);
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
            return (
              <Gentlemen
                key={gentleman.id}
                gentleman={gentleman}
                action={() => {
                  toggleGentleman(gentleman.id);
                }}
                actionRemove={() => {
                  removeGentleman(gentleman.id);
                }}
              />
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
