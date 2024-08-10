import { useEffect, useState } from "react";

import { BotCollection, BotDetails, YourBotArmy } from "./components";
import "./App.css";

function App() {
  const [botCollectionData, setBotCollectionData] = useState([]);
  const [selectedBotIndex, setSelectedBotIndex] = useState(0);
  const [armyIdList, setArmyIdList] = useState([]);
  const selectedBot = botCollectionData[selectedBotIndex];

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then(setBotCollectionData)
      .catch(console.error);
  }, []);

  const updateBotIndex = (index) => setSelectedBotIndex(index);

  const armyList = botCollectionData.filter((bot) =>
    armyIdList.includes(bot.id)
  );

  const addToArmy = (id) => setArmyIdList([...armyIdList, id]);

  const releaseFromArmy = (id) => {
    const newArmyIdList = armyIdList.filter((armyId) => armyId !== id);
    setArmyIdList(newArmyIdList);
  };

  const dischargeFromService = (id) => {
    const newBotCollectionData = botCollectionData.filter(
      (bot) => bot.id !== id
    );
    setBotCollectionData(newBotCollectionData);
  };

  return (
    <main>
      <BotCollection
        collection={botCollectionData}
        onSelect={updateBotIndex}
        onDischarge={dischargeFromService}
      />
      <BotDetails bot={selectedBot} onAdd={addToArmy} />
      <YourBotArmy armyList={armyList} onRelease={releaseFromArmy} />
    </main>
  );
}

export default App;
