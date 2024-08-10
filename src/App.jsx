import { useEffect, useState } from "react";

import { Row, Col } from "./components";

import {
  BotCollection,
  BotDetails,
  YourBotArmy,
  Container,
} from "./components";
import "./App.css";

function App() {
  const [botCollectionData, setBotCollectionData] = useState([]);
  const [selectedBotIndex, setSelectedBotIndex] = useState(0);
  const [armyIdList, setArmyIdList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const selectedBot = botCollectionData[selectedBotIndex];

  useEffect(() => {
    fetch("https://json-server-vercel-three-pearl.vercel.app/bots")
      .then((response) => response.json())
      .then(setBotCollectionData)
      .then(() => setIsLoading(false))
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
    <Container className="p-4">
      <Row className="gap-2">
        <Col>
          {isLoading && <p>Loading...</p>}
          {!isLoading && (
            <BotCollection
              collection={botCollectionData}
              onSelect={updateBotIndex}
              onDischarge={dischargeFromService}
            />
          )}
        </Col>
        <Col>
          <div className="sticky-top">
            <BotDetails bot={selectedBot} onAdd={addToArmy} />
          </div>
        </Col>
        <Col>
          <YourBotArmy
            armyList={armyList}
            onRelease={releaseFromArmy}
            onSelect={updateBotIndex}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
