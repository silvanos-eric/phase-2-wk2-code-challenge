import { useState } from "react";

import { BotCollection, BotDetails, YourBotArmy } from "./components";
import "./App.css";

function App() {
  return (
    <main>
      <BotCollection />
      <BotDetails />
      <YourBotArmy />
    </main>
  );
}

export default App;
