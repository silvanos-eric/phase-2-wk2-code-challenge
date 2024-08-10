import { useEffect, useState } from "react";

import { BotCollection, BotDetails, YourBotArmy } from "./components";
import "./App.css";

function App() {
  const [botCollectionData, setBotCollectionData] = useState([]);
  const [selectedBotIndex, setSelectedBotIndex] = useState(0);
  const selectedBot = botCollectionData[selectedBotIndex];

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then(setBotCollectionData)
      .catch(console.error);
  }, []);

  const updateBotIndex = (index) => setSelectedBotIndex(index);

  return (
    <main>
      <BotCollection collection={botCollectionData} onSelect={updateBotIndex} />
      <BotDetails bot={selectedBot} />
      <YourBotArmy />
    </main>
  );
}

export default App;
