const BotDetails = ({ bot }) => {
  const {
    avatar_url,
    id,
    name,
    health,
    damage,
    armor,
    bot_class,
    catchphrase,
  } = bot || {};
  return (
    <div className="bot">
      <img src={avatar_url} alt="" className="img" />
      <div className="info">
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Health: {health}</p>
        <p>Damage: {damage}</p>
        <p>Armor: {armor}</p>
        <p>Bot Class: {bot_class}</p>
        <p>Cathphrase: {catchphrase}</p>
      </div>
    </div>
  );
};

export { BotDetails };
