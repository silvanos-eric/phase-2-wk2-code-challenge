import { useEffect, useState } from "react";

import { BotCollection, BotDetails, YourBotArmy } from "./components";
import "./App.css";

function App() {
  const [botCollectionData, setBotCollectionData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then(setBotCollectionData)
      .catch(console.error);
  }, []);

  return (
    <main>
      <BotCollection collection={botCollectionData} />
      <BotDetails />
      <YourBotArmy />
    </main>
  );
}

export default App;
